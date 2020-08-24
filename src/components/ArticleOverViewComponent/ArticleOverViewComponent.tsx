import React from 'react';
import {
  Grid,
  makeStyles,
} from '@material-ui/core';
import { observer, inject } from 'mobx-react';
import { Articles } from '../../types/index';
import { ArticleList } from '../ArticleList';

const useStyles = makeStyles({
  root: {
    overflow: 'hidden',
    marginTop: 20
  },
});

type ArticlesListProps = {
  articles: Articles
}

export const ArticleOverViewComponent = inject('articlesStore')(observer(({ articlesStore }: { articlesStore?: ArticlesListProps }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={5}>
        {articlesStore?.articles.map(article => <ArticleList article={article} />)}
      </Grid>
    </div>
  )
}))


