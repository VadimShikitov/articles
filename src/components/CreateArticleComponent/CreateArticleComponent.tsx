import React, { useCallback } from 'react';
import { useNewArticle } from '../../hooks/useNewArticle';
import { useValidation, ValidationKey } from '../../hooks/useValidation';
import { validators } from '../../constants/validation';
import { useHistory } from 'react-router-dom';
import { CustomInput, CustomTextArea } from '../Input';
import { Paper, makeStyles, Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { inject, observer } from 'mobx-react';
import { Article } from '../../types';
import { genereateID } from '../../helpers';

const useStyles = makeStyles({
  root: {
    position: 'fixed',
    top: 64,
    left: 0,
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  paper: {
    position: 'relative',
    width: 500,
    // height: '100%',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
  },
  buttonGroup: {
    display: 'flex',
    justifyContent: 'space-between',
    paddingRight: 30,
    paddingLeft: 30,
    paddingBottom: 30,
  },
})

type CreateArticalProps = {
  articlesStore?: {
    addArticle: (article: Article) => void,
  }
}

/*
** Compnent for create new article by using hook, whoos managing new article state.
*/
export const CreateArticleComponent = inject('articlesStore')(observer(({ articlesStore }: CreateArticalProps) => {

  const history = useHistory();
  const { validate, errorsState } = useValidation();

  const { title, imageUrl, description, changeDescription, changeImageUrl, changeTitleText } = useNewArticle();
  const classes = useStyles();

  const addArticalHandler = useCallback(() => {
    const articleId = genereateID();
    articlesStore?.addArticle({
      title: title,
      image: imageUrl,
      description: description,
      likeCount: 0,
      isLiked: false,
      id: articleId
    })
    history.push('/');
  }, [title, imageUrl, description, articlesStore, history])


  const validateOnBlur = useCallback(({ target: { name } }: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    validate({ titleError: title, imageError: imageUrl, descriptionError: description }, validators)(name as ValidationKey);
  }, [title, imageUrl, description, validate])

  const cancelHandler = useCallback(() => history.push('/'), [history]);

  const { titleError, descriptionError, imageError } = errorsState;
  console.log("titleError", titleError)

  return (
    <div className={classes.root}>
      <Paper className={classes.paper} elevation={3}>
        <Typography variant='h5' align='center' style={{ marginTop: 15 }}>Create a new article</Typography>
        <CustomInput
          error={titleError ? titleError : ''}
          name={'titleError'}
          value={title}
          onChange={changeTitleText}
          onBlur={validateOnBlur}
          label={'title'}
          style={{ margin: 25 }}
        />
        <CustomInput
          error={imageError ? imageError : ''}
          name={'imageError'}
          value={imageUrl}
          onBlur={validateOnBlur}
          onChange={changeImageUrl}
          label={'image'}
          style={{ margin: 25 }}
        />
        <CustomTextArea
          error={descriptionError ? descriptionError : ''}
          name={'descriptionError'}
          value={description}
          onBlur={validateOnBlur}
          onChange={changeDescription}
          label={'description'}
          rows={3}
          style={{ margin: 25 }}
        />
        <div className={classes.buttonGroup}>
          <Button color='secondary' size="medium" variant="outlined" onClick={cancelHandler}>Cancel</Button>
          <Button color='primary' size="medium" variant="outlined" onClick={addArticalHandler}>Save</Button>
        </div>
      </Paper>
    </div>
  )
}))