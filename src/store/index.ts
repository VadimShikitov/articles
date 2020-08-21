import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { articlesReducer } from '../ducks/articles/reducer';

export const store = createStore(articlesReducer, composeWithDevTools());
