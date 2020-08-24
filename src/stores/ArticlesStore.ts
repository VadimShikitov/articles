import { observable } from 'mobx';
import { mockArticles } from './mockArticles';
import { Articles } from '../types/index';
import 'mobx-react-lite/batchingForReactDom'

class ArcticlesStore {
  @observable articles: Articles = mockArticles;
}

export const articlesStore = new ArcticlesStore();
