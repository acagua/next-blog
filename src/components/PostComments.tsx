import { Comment as CommentType } from '@/typings';
import { Comment } from './Comment';

export const PostComments = ({ comments }: { comments: CommentType[] }) => {
  return (
    <section className="flex flex-col justify-start p-5">
      <h3 className="text-xl"> Comments: </h3>
      {comments.reverse().map((comment: CommentType) => {
        return <Comment key={comment.id} comment={comment} />;
      })}
    </section>
  );
};
