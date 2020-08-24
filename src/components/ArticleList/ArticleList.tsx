import React from 'react';
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
import { Article } from '../../types/index';


const useStyles = makeStyles({
  root: {
    maxWidth: 350,
    margin: 'auto',
  },
  media: {
    height: 220,
  },
});

export const ArticleList = ({ article }: { article: Article }) => {
  const classes = useStyles();
  return (
    <Grid key={article.id} item xl={3} lg={4} md={6} xs={12}>
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
        <CardActions>
          <Button size='small' color='primary'>
            Share
                </Button>
          <Button size='small' color='primary'>
            Learn more
                </Button>
        </CardActions>
      </Card>
    </Grid>
  )
};