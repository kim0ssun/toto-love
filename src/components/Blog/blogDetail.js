import React, { useState, useEffect } from 'react';
import firebase from '../../firebase';
import { makeStyles } from '@material-ui/core/styles';
import { useParams } from 'react-router';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { useHistory } from 'react-router';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 40%)',
  },

}));

const db = firebase.firestore();
const storiesRef = db.collection('stories').orderBy('timestamp', 'desc').limit(100);


export default props => {
  let { sid } = useParams();
  const [id , setId] = useState();
  const [stories , setStories] = useState([]); 
  const classes = useStyles();
  let history = useHistory();
  

  useEffect(() => {
    const story = [];
    setId(sid);
    storiesRef.get().then(snapshot => {
      snapshot.forEach(doc => {
        story.push(doc.data());
      });
    })
    .then(() => {
      setStories(story);
      console.log(story);
    })
    .catch(err => console.log(err))
  }, []);

  const handleClick = (id, e) => {
    console.log(`디테일 클릭=> ${id}`);
    setId(id);
  };

  return (
    <>
    {stories.filter(story => story.id === id).map(article => {
      return (
        <div>
          <h1>{article.title}</h1>
          <Box 
            height
          >
            {article.content}
          </Box>
        </div>
      )
    })}
    <div className={classes.root}>
      <GridList className={classes.gridList} cols={3}>
        {stories.map(story => (
          <GridListTile key={story.id}>
            <img src={story.main_picture} alt={story.title} />
            <GridListTileBar
              title={story.title}
              classes={{
                root: classes.titleBar,
                title: classes.title,
              }}
              actionIcon={
                <IconButton aria-label={`star ${story.title}`} onClick={ e => handleClick(story.id, e)} >
                  <StarBorderIcon className={classes.title} />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  </>
  )
}