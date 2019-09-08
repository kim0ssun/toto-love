import React, { Fragment } from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import Header from './components/Header/header';
import Home from './components/Home/home';
import Blog from './components/Blog/blog';
import NotFound from './components/NotFound/notFound'

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/blog" component={Blog} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
