export interface IBlogPost {
  id: string;
  title: string;
  content: string;
  videoId?: string;
  videoTitle?: string;
  imageUrl?: string;
  author: string;
  comments: number;
  likes: number;
  date: string;
  tags?: string[];
}

export interface IBlogWrapper {
  isCard?: boolean;
  type?: string;
  data?: IBlogPost;
}

export interface IPostBody {
  data?:IBlogPost;
}

export interface IPostFoot {
  type?: string;
  data?: IBlogPost;
}