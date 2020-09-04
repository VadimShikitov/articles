import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { CssBaseline } from '@material-ui/core';
import { HeaderComponent } from './HeaderComponent';
import { ArticleOverViewComponent } from './ArticleOverViewComponent';
import { CreateArticleComponent } from './CreateArticleComponent';
import { ARTICLES, NEW_ARTICLE } from '../constants/routes';

//Component for managing application routes
export const Routes = () => (
  <>
    <CssBaseline />
    <HeaderComponent />
    <Switch>
      <Route path={ARTICLES} exact component={ArticleOverViewComponent} />
      <Route path={NEW_ARTICLE} exact component={CreateArticleComponent} />
    </Switch>
  </>
)