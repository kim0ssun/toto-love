import React, { useState, useEffect, Fragment } from 'react';
import firebase from '../../firebase';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Pagination from 'material-ui-flat-pagination';
import { useHistory, useParams } from 'react-router';

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
    marginBottom: 5,
    '&:hover': {
      backgroundColor: '#444',
      cursor: 'pointer'
    }
  },
  
  content: {
    backgroundColor: 'rgba(255,255,255,0.0)',
    color: '#fff',
    maxHeight: '100%',
   
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
  let history = useHistory();
  let { page } = useParams();
  
  useEffect(() => {
    const story = [];
    storiesRef.get().then(snapshot => {
      snapshot.forEach(doc => {
        story.push(doc.data());
      });
    })
    .then(() => {
      setStories(story);
      setOffset(limit*(page-1));
      console.log(story);
    })
    .catch(err => console.log(err))
  }, [page]);

  const handleClick = (offset) => {
    console.log('offset => '+ offset);
    const page = offset / limit + 1;
    setOffset(offset);
    history.push(`/blog/${page}`);
  }

  const handleDetailClick = (e, id) => {
    console.log(`detail click => ${id}`);
    history.push(`/blog/detail/${id}`);
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
            <Card className={classes.card} key={story.title}  >
              <CardActionArea onClick={(e) => handleDetailClick(e, story.id)} >
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
                        <Box fontSize={{xs: 13, md: 16}}>{story.content}</Box>
                    </Box>
                  </CardContent>
                </Box>
              </Box>
              </CardActionArea>
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