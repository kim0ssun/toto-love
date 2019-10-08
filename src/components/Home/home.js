import React, { useState, useEffect, Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import firebase from '../../firebase';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#000",
    marginTop: '-70px' 
  },
  container: {
    marginTop: 50,
  },
  banner: {
    width: "100%",
    height: "auto",
    padding: 2,
    textAlign: "center",
    padding: 10,
    '& :hover': {
      cursor: 'pointer',
      border: "1px solid #fff"
    },
  },
  site: {
    width: "100%",
    height: "auto",
    textAlign: "center",
    padding: 10,
    objectFit: "cover",
    '& :hover': {
      cursor: 'pointer',
      border: "1px solid #fff"
    },
  },
  item: {
    '& :hover': {
      cursor: 'pointer',
      border: "1px solid #fff"
    },
  },
  media: {
    height: 0,
    padding: "50%"
  },
  card: {
    padding: 1,
    border: '1px solid #444',
    background: "black",
    '&:hover': {
      border: "1px solid #fff"
    },
  },
  header: {
    textAlign: "center",
    backgroundColor: "black",
    color: "white",
    
  },
  content: {
    color: 'white',
    textAlign: 'center'
  },
  banner2: {
    height: 0,
    padding: "15%"
  }

}));

const db = firebase.firestore();
const archivesRef = db.collection('archives');

export default props => {
  const classes = useStyles();
  const [archives, setArchives] = useState([]);

  useEffect(() => {
    const archive = [];
    archivesRef.get().then(snapshot => {
      snapshot.forEach(doc => {
        archive.push(doc.data());
      });
      return archive;
    })
    .then((archive)=> {
      setArchives(archive);
    })
    .catch((err) => console.log('err; ', err))
  }, []);

  return (
    <div className={classes.root}>
      <Box 
        px={{xs: 3, sm: 8, md: 15}}
        pt={{xs: 3}}
      >
        <Grid container spacing={2}  className={classes.container}>
          {archives.filter(archive => archive.group === 'banner_top')
            .map((banner, i) => {
              return (
                <Grid item xs={12} md={6} key={i} >
                  <Card className={classes.card}>
                    <CardActionArea>
                      <CardMedia
                        className={classes.banner2}
                        image={(banner.url)}
                        title=""
                      />
                    </CardActionArea>
                  </Card> 
                </Grid>
              )
            })
          }
      </Grid>
        <Grid container spacing={1} >
          {archives.filter(archive => archive.group === 'main_text')
            .map((text, i) => {
              return (
                <Grid item xs={12} key={i}>
                  <Box 
                    color="white"
                    p={4}
                    textAlign="center"
                    fontWeight={600}
                    fontSize={{xs:'h6.fontSize', md:'h5.fontSize',}}
                  >
                  {text.title}
                  </Box>
                  <Box color="white" textAlign='center' p={3} fontSize={16}>
                    {text.sub_title}
                  </Box>
                  <Box color="white" textAlign='center'>
                  {text.content.split('\\n').map((line, i) => {
                    return (<Box key={i} pt={1}>{line}<br/></Box>)
                  }
                  )}
                  </Box>
                </Grid>
              )
            })
          }
        </Grid>
        <Grid container spacing={2}  className={classes.container}>
          {archives.filter((archive) => archive.group === 'site')
            .sort( (a, b) => a.order > b.order ? 1 : -1)
            .map((site, i) => {
              return (
                <Grid item xs={12} sm={6} md={4} key={i}>
                  <Card className={classes.card}>
                    <CardActionArea>
                      <Box 
                        fontSize={{xs:'h7.fontSize', sm: 'h6.fontSize'}}
                        p={2}
                        color="white"
                        textAlign="center"
                      >
                       {site.title}
                      </Box>
                      <CardMedia
                        className={classes.media}
                        image={(site.url)}
                        title=""
                      />
                      <CardContent >
                        <Typography variant="body2" className={classes.content} component="p">
                          {site.content.split('\\n').map((line, i) => {
                            return (<Box key={i} pt={0}>{line}<br/></Box>)
                          })}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card> 
                </Grid>
              )
            })
          }
        </Grid>
        <Grid container spacing={2}  className={classes.container}>
          {archives.filter(archive => archive.group === 'banner_bottom')
            .map((banner, i) => {
              
              return (
                <Grid item xs={12} md={6} key={i} >
                  <Card className={classes.card}>
                    <CardActionArea>
                      <CardMedia
                        className={classes.banner2}
                        image={(banner.url)}
                        title=""
                      />
                    </CardActionArea>
                  </Card> 
                </Grid>
              )
            })
          }
      </Grid>
        <Grid container spacing={2} className={classes.container}>
        {archives.filter(archive => archive.group === 'footer')
          .map((text, i) => {
            return (
              <Grid item xs={12} key={i} >
                <Box 
                  color="white"
                  p={4}
                  textAlign="center"
                  fontWeight={600}
                  fontSize={{xs:'h6.fontSize', md:'h5.fontSize',}}
                >
                {text.title}
                </Box>
                {/* <Box color="white" textAlign='center' p={3} fontSize={16}>
                  {text.sub_title}
                </Box> */}
                <Box color="white" textAlign='center'>
                {text.content.split('\\n').map((line, i) => {
                  return (<Box key={i} pt={1} >{line}<br/></Box>)
                }
                )}
                </Box>
              </Grid>
            )
          })
        }
        </Grid>
      </Box>  
    </div>
    
  )

}
  