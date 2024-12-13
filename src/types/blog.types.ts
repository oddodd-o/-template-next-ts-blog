export interface IBlogPost {
  id: string;
  title: string;
  content: string;
  imageUrl: string;
}

export interface IBlogPostProps {
  isCard?: boolean;
  data?: IBlogPost;
}

export interface IPostBody {
  data?:IBlogPost;
}