import { Comment as CommentType } from '@/typings';

export const Comment = ({ comment }: { comment: CommentType }) => {
  const { id, author, content } = comment;
  return (
    <div key={id} className="p-5">
      <p>
        <b>{author}</b>: <q> {content} </q>
      </p>
    </div>
  );
};
