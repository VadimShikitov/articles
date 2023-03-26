export type Article = {
  image: string,
  title: string,
  description: string,
  id: string,
  likeCount: number,
  isLiked: boolean,
}
export type Articles = {
  [key: string]: Article,
}

export interface O {
  bla: string;
}

export type A = O | 'string'

export type asdasd