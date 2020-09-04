import React, { useCallback } from 'react';
import { observer, inject } from 'mobx-react';
import { Link } from 'react-router-dom';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Grid from '@material-ui/core/Grid';
import SpeedDial from '@material-ui/lab/SpeedDial';
import AddIcon from '@material-ui/icons/Add';
import { ArticleList } from '../ArticleList';
import { Articles } from '../../types/index';
import { NEW_ARTICLE } from '../../constants/routes';

const useStyles = makeStyles({
  root: {
    position: 'relative',
    overflow: 'hidden',
    marginTop: 20
  },
  speedDial: {
    position: 'fixed',
    bottom: 20,
    right: 20,
  }
});

type ArticlesProps = {
  articlesStore?: {
    articles: Articles,
    articleLike: (artId: string) => void,
    articleUnlike: (artId: string) => void,
    deleteArticle: (artId: string) => void,
  }
}

/**
 * Component retrieving data from the store and render all articles
 * @param articlesStore - store for all articles and their actions
 * @return view all articles
 */

export const ArticleOverViewComponent = inject('articlesStore')(observer(({ articlesStore }: ArticlesProps) => {
  const classes = useStyles();

  const handleLikeCard = useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
    const id = event.currentTarget.dataset.id!;
    articlesStore?.articleLike(id);
  }, [articlesStore]);

  const handleUnlikeCard = useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
    const id = event.currentTarget.dataset.id!;
    articlesStore?.articleUnlike(id);
  }, [articlesStore]);

  const handleDeleteCard = useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
    const id = event.currentTarget.dataset.id!;
    articlesStore?.deleteArticle(id);
  }, [articlesStore]);

  return (
    <div className={classes.root}>
      <Grid container spacing={5}>
        {articlesStore && Object.values(articlesStore.articles).map(article =>
          <ArticleList
            key={article.id}
            article={article}
            handleLikeCard={handleLikeCard}
            handleUnlikeCard={handleUnlikeCard}
            handleDeleteCard={handleDeleteCard}
          />)}
      </Grid>
      <div className={classes.speedDial}>
        <Link to={NEW_ARTICLE} >
          <SpeedDial icon={<AddIcon />} ariaLabel='SpeedDial example' open />
        </Link>
      </div>
    </div>
  )
}))


