import { Comment as CommentType } from '@/typings';

export const Comment = ({ comment }: { comment: CommentType }) => {
  const { id, email, content } = comment;
  return (
    <div key={id} className="p-5">
      <p>
        <b>{email}</b>: <q> {content} </q>
      </p>
    </div>
  );
};
