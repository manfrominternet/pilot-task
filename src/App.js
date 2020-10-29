
//import React, { useState, useEffect } from "react";
/*Using ReactJS build a two-page web application.
1. First page ('/' root route) should have a "Login to view our user pool" header, two input fields, one for Email and one for Password, and a "Login" button, one above the other. All elements should be center page.
2. Each field should validate itself. Use Formik and Yup for form control and validation. Email should be a valid email string, and password should be a string with a minimum amount of 8 characters. Display relevant errors if fields are invalid.
3. On successful login, the user is to be redirected to the second page ('/users' route). On page load make a GET request to https://jsonplaceholder.typicode.com/users and present each user in a card, displaying name, email, and city. 
4. Add a dummy navigation bar with Moyyn logo on the left side and some dummy buttons aligned to the right.

Optional - use React-Router for routing.
Optional - use Material-UI for the UI elements. */


import { BrowserRouter, Switch, Route } from "react-router-dom";
import './App.css';
import Form from "./Form/Form";

import CardApp from "./components2/card/card-app";


import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginRight: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
}));

export default function PermanentDrawerRight() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar style={{backgroundColor: "white"}}>
          <Typography variant="h6" noWrap>
         <img src="https://moyyn.com/wp-content/uploads/2020/03/cropped-Untitled-design-6-1.png" alt="moyyn"/> 
          </Typography>
        </Toolbar>
      </AppBar>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Typography paragraph>
        <header className="App-header">
      <BrowserRouter>
      
        <Switch>
          <Route exact path="/" component={ Form} />
          <Route exact path="/users" component={ CardApp} />
        </Switch>
      </BrowserRouter>
      </header>
        </Typography>
   
      </main>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="right"
      >
        <div className={classes.toolbar} />
        <Divider />
        <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </div>
  );
}


