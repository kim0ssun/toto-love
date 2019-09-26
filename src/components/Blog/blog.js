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
  }

}));

const db = firebase.firestore();
const storiesRef = db.collection('stories');

export default props => {
  const [stories , setStories] = useState([]); 
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

  return (
    <div className={classes.root}>
      <Box
        
         px={{xs: 3, sm: 8, md: 15}}
         pt={{xs: 3}}
        //  styles={{background: 'black'}}
      >
        
          {stories.map((story) => {
            return (
              
                <Card className={classes.card}>
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
                          {/* <Box > */}
                            {/* <Typography variant="h6" align="center">사설토토</Typography> */}
                            <Box fontSize={{xs: 16, md: 20}} textAlign="center" mb={2}>{story.title}</Box>
                            <Box paragraph fontSize={{xs: 14, md: 16}}>{story.content}</Box>
                          {/* </Box> */}
                        </Box>
                      </CardContent>
                    </Box>
                  </Box>
                </Card>
                
        
            )
          } )}
         
      </Box>   
    </div>
    
  )
}