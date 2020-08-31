export type Article = {
  image: string,
  title: string,
  description: string,
  id: string,
  likeCount: number,
  isLiked: boolean,
};
export type Articles = {
  [key: string]: Article;
}