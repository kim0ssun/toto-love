import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Hidden from '@material-ui/core/Hidden';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import { Link } from 'react-router-dom';
import { Link as External } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1, 
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  drawer: {
    width: 300,
    padding: 40,
    
  },
  link: {
    margin: 8,
    color: 'white',
    textDecoration: 'none',
    '&:hover' : {
      color: 'red'
    }
  }
}));


export default props => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar style={{backgroundColor: 'black'}}>
          <Hidden smUp>
            <IconButton edge="start" className={classes.menuButton} onClick={() => setOpen(true)} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
          </Hidden>
          <Typography variant="h6" className={classes.title}>
            <Link to="/" className={classes.link} >토토사랑</Link>
          </Typography>
          <Hidden xsDown>
            <Link className={classes.link}  to="/">사설토토</Link>
            <Link className={classes.link}  to="/blog" href="" >카지노</Link>
            <Link className={classes.link}  to="/blog">뉴스</Link>
            {/* <External className={classes.link}  href={'https://www.naver.com'} target="_blank">네이버</External> */}
          </Hidden>
          
        </Toolbar>
      </AppBar>
      <Drawer className={classes.drawer}
              anchor="left"
              open={open}
              onClose={() => setOpen(false)}
              >
        <List style={{backgroundColor: '#444'}} onClick={() => setOpen(false)}>
          <ListItem button key={1}>
            <Link className={classes.link} color="inherit" to="/">사설토토</Link>
          </ListItem>
          <ListItem button key={2} >
            <Link className={classes.link} color="inherit" to="/blog">카지노</Link>
          </ListItem>
          <ListItem button key={3} >
            <Link className={classes.link} color="inherit" to="/blog">뉴스</Link>
          </ListItem>
        </List>
      </Drawer>
    </div>
  )
}