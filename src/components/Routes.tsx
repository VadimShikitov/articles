import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { HeaderComponent } from './HeaderComponent';
import { ARTICLES, LOGIN, NEW_ARTICLE } from '../constants/routes'
import { CssBaseline } from '@material-ui/core';
import { ArticleOverViewComponent } from './ArticleOverViewComponent';
import { CreateArticleComponent } from './CreateArticleComponent';

//Component for managing application routes
export const Routes = () => (
  <>
    <CssBaseline />
    <HeaderComponent />
    <Switch>
      <Route path={ARTICLES} exact component={ArticleOverViewComponent} />
      <Route path={NEW_ARTICLE} exact component={CreateArticleComponent} />
      {/* <Route path={ARTICLES} exact component={ArticleOverViewComponent} /> */}
    </Switch>
  </>
)