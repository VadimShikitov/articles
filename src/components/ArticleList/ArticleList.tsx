import React from 'react';
import { observer } from 'mobx-react'
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Grid,
  makeStyles,
  Typography,
} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import { LikeIconComponent } from '../LikeIconComponent'
import { Article } from '../../types/index';


const useStyles = makeStyles({
  root: {
    maxWidth: 350,
    margin: 'auto',
  },
  media: {
    height: 220,
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  likeArea: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  editArea: {
    display: 'flex',
    justifyContent: 'end',
    alignItems: 'center'
  }
});

type ArticleListProps = {
  article: Article,
  handleLikeCard: (event: React.MouseEvent<HTMLButtonElement>) => void,
  handleUnlikeCard: (event: React.MouseEvent<HTMLButtonElement>) => void,
  handleDeleteCard: (event: React.MouseEvent<HTMLButtonElement>) => void,
}

export const ArticleList = observer(({ article, handleLikeCard, handleUnlikeCard, handleDeleteCard }: ArticleListProps) => {

  const classes = useStyles();
  const fill = article.isLiked ? 'red' : 'grey';
  const likeHandle = article.isLiked ? handleUnlikeCard : handleLikeCard;

  return (
    <Grid item xl={3} lg={4} md={6} xs={12}>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            title={article.title}
            image={article.image}
          />
          <CardContent>
            <Typography gutterBottom variant='h5' component='h2'>
              {article.title}
            </Typography>
            <Typography variant='body2' color='textSecondary' component='p'>
              {article.description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions className={classes.cardActions}>
          <div className={classes.likeArea}>
            <IconButton data-id={article.id} onClick={likeHandle}>
              <LikeIconComponent fill={fill} />
            </IconButton>
            <Typography>{article.likeCount}</Typography>
          </div>
          <div className={classes.editArea}>
            <Button size='small' color='primary'>
              Edit
            </Button>
            <Button data-id={article.id} size='small' style={{ color: 'red' }} onClick={handleDeleteCard}>
              Delete
            </Button>
          </div>
        </CardActions>
      </Card>
    </Grid>
  )
});