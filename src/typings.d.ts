export type Post = {
  id: string;
  title: string;
  slug: string;
  preview: string;
  content: string;
  author: string;
  comments: Comment[];
};

export type Comment = {
  id: string;
  content: string;
  author: string;
};
