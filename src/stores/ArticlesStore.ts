import { Article } from './../types/index';
import { observable, action } from 'mobx';
import { Articles } from '../types/index';
import { mockArticles } from './mockArticles'
import 'mobx-react-lite/batchingForReactDom'


//  class for managing an articles that has observaиду variables for a state and an action for changing it
class ArcticlesStore {
  @observable articles: Articles = mockArticles;

  @action articleLike = (artId: string) => {
    this.articles[artId].likeCount++;
    this.articles[artId].isLiked = true;
  };

  @action articleUnlike = (artId: string) => {
    this.articles[artId].likeCount--;
    this.articles[artId].isLiked = false;
  }

  @action deleteArticle = (artId: string) => {
    delete this.articles[artId]
  }

  @action addArticle = (article: Article, id: string) => {
    this.articles[id] = article;
  }
};


export const articlesStore = new ArcticlesStore();
