import React, { useState, useEffect } from 'react';
import firebase from '../../firebase';
import { makeStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { CardHeader } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Pagination from 'material-ui-flat-pagination';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor:'#000'
  },
  image: {
    height: 0,
    padding: '35%'
  },
  card: {
    width: '100%',
    border: '1px solid #444',
    height: '100%',
    backgroundColor: '#222',
    marginBottom: 5
  },
  content: {
    backgroundColor: "#222",
    color: '#fff',
    maxHeight: '100%'
  },
  pageRoot: {
    backgroundColor: '#000',
    padding: 25,
    textAlign: 'center'
  },
  rootCurrent: {
    border: '1px solid #777',
    borderRadius: '50%',
    
  }, 
  rootEllipsis: {
    color: '#fff',
    
  },

}));

const db = firebase.firestore();
const storiesRef = db.collection('stories').orderBy('timestamp', 'desc').limit(100);

export default props => {
  const [stories , setStories] = useState([]); 
  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(3);
  const classes = useStyles();

  useEffect(() => {
    const story = [];
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

  const handleClick = (offset) => {
    setOffset(offset);
  }

  return (
    <div className={classes.root}>
      <Box
         px={{xs: 0, sm: 5, md: 15}}
         pt={{xs: 0, sm: 1}}
        //  styles={{background: 'black'}}
      >
        {stories.slice( offset, offset + limit ).map((story) => {
          return (
            <Card className={classes.card} key={story.title}>
              <Box 
                display='flex'
                justifyContent="center"
                alignItems="center"
                flexDirection={{xs: 'column', lg: 'row'}}
                width="100%"
              >
                <Box 
                  width={{xs: '100%', lg: '30%'}}
                >
                  <CardMedia 
                    className={classes.image}
                    image={story.main_picture}
                    title=""
                  />     
                </Box>
                <Box 
                  width={{ xs: '100%', lg: '70%'}}
                  height={'auto'}   
                >
                  <CardContent className={classes.content}>
                    <Box 
                      display='flex'
                      flexDirection='column'
                      justifyContent="center"
                      alignItems="center"
                      p={{xs:1, sm:2, md:3, lg:4, xl:5}}   
                    >
                        <Box fontSize={{xs: 16, md: 20}} textAlign="center" mb={2}>{story.title}</Box>
                        <Box  fontSize={{xs: 13, md: 16}}>{story.content}</Box>
                    </Box>
                  </CardContent>
                </Box>
              </Box>
            </Card>
          )
        } )} 
        <Box 
          color="black"
          style={{backgroundColor: 'white'}}
          flexDirection="row"
        >
          <Pagination  
            reduced
            offset={offset}
            limit={limit}
            classes={{
              root: classes.pageRoot,
              rootCurrent: classes.rootCurrent,
              rootEllipsis: classes.rootEllipsis
            }}
            total={stories.length}
            onClick={(e, offset) => handleClick(offset)}
          />
        </Box>
      </Box>   
    </div>
    
  )
}