import { Post } from '@/typings';
import Link from 'next/link';

export const PostPreview = ({ data }: { data: Post }) => {
  return (
    <article className="m-4 rounded-md border-2 border-gray-400 p-2 hover:bg-gray-200">
      <Link href={`/blog/post/${data.slug}`}>
        <h2 className="text-3xl"> {data.title} </h2>
        <h3 className="text-xl font-bold"> {data.author} </h3>
        <p> {data.preview} </p>
      </Link>
    </article>
  );
};
