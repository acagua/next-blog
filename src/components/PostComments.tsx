import { Comment as CommentType } from '@/typings';
import { Comment } from './Comment';

export const PostComments = ({ comments }: { comments: CommentType[] }) => {
  console.log({ comments });
  return (
    <section className="flex flex-col justify-start p-5">
      <h3 className="text-xl"> Comments: </h3>
      {comments.length > 0 ? (
        comments.map((comment: CommentType) => {
          return <Comment key={comment.id} comment={comment} />;
        })
      ) : (
        <p> No comments yet </p>
      )}
    </section>
  );
};
