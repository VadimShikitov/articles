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

const useStyles = makeStyles({
  root: {
    maxWidth: 350,
    margin: 'auto',
  },
  media: {
    height: 220,
  },
});

export const ArticleOverViewComponent: React.FC = () => {
  const classes = useStyles();
  return (
    <>
      <Grid container spacing={5}>
        <Grid item xl={3} lg={4} md={6} xs={12}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                title='starWars'
                image='https://i0.wp.com/itc.ua/wp-content/uploads/2019/12/star_wars_the_rise_of_skywalker_i00.jpg?fit=770%2C546&quality=100&strip=all&ssl=1'
              />
              <CardContent>
                <Typography gutterBottom variant='h5' component='h2'>
                  Star Wars
                </Typography>
                <Typography variant='body2' color='textSecondary' component='p'>
                  Jedi: Fallen Order follows the story of former Jedi padawan
                  Cal Kestis, a survivor of Emperor Papatines Order 66 currently
                  in hiding. However, it’s not long before Cal is offered an
                  opportunity to help rebuild the Jedi Order.
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
        <Grid item xl={3} lg={4} md={6} xs={12}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                title='starWars'
                image='https://i0.wp.com/itc.ua/wp-content/uploads/2019/12/star_wars_the_rise_of_skywalker_i00.jpg?fit=770%2C546&quality=100&strip=all&ssl=1'
              />
              <CardContent>
                <Typography gutterBottom variant='h5' component='h2'>
                  Star Wars
                </Typography>
                <Typography variant='body2' color='textSecondary' component='p'>
                  Jedi: Fallen Order follows the story of former Jedi padawan
                  Cal Kestis, a survivor of Emperor Papatines Order 66 currently
                  in hiding. However, it’s not long before Cal is offered an
                  opportunity to help rebuild the Jedi Order.
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
        <Grid item xl={3} lg={4} md={6} xs={12}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                title='starWars'
                image='https://i0.wp.com/itc.ua/wp-content/uploads/2019/12/star_wars_the_rise_of_skywalker_i00.jpg?fit=770%2C546&quality=100&strip=all&ssl=1'
              />
              <CardContent>
                <Typography gutterBottom variant='h5' component='h2'>
                  Star Wars
                </Typography>
                <Typography variant='body2' color='textSecondary' component='p'>
                  Jedi: Fallen Order follows the story of former Jedi padawan
                  Cal Kestis, a survivor of Emperor Papatines Order 66 currently
                  in hiding. However, it’s not long before Cal is offered an
                  opportunity to help rebuild the Jedi Order.
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
        <Grid item xl={3} lg={4} md={6} xs={12}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                title='starWars'
                image='https://i0.wp.com/itc.ua/wp-content/uploads/2019/12/star_wars_the_rise_of_skywalker_i00.jpg?fit=770%2C546&quality=100&strip=all&ssl=1'
              />
              <CardContent>
                <Typography gutterBottom variant='h5' component='h2'>
                  Star Wars
                </Typography>
                <Typography variant='body2' color='textSecondary' component='p'>
                  Jedi: Fallen Order follows the story of former Jedi padawan
                  Cal Kestis, a survivor of Emperor Papatines Order 66 currently
                  in hiding. However, it’s not long before Cal is offered an
                  opportunity to help rebuild the Jedi Order.
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
      </Grid>
    </>
  );
};
