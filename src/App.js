import React, { Fragment } from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import Header from './components/Header/header';
import Home from './components/Home/home';
import Blog from './components/Blog/blog';
import NotFound from './components/NotFound/notFound';
import BlogDetail from './components/Blog/blogDetail';

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/blog/:page" component={Blog} />
        <Route exact path="/blog/detail/:sid" component={BlogDetail} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
