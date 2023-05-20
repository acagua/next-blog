import { PostComments } from '@/components/PostComments';
import { data } from '@/data';
import { Post } from '@/typings';
import Head from 'next/head';

export default async function Post({ params: { slug } }: { params: { slug: string } }) {
  const postData: Post | undefined = await getPostData(slug);

  if (!postData) {
    return <div>Post not found</div>;
  }

  const { title, content, author, comments } = postData;

  return (
    <>
      <Head>
        <title>My Blog - {title}</title>
      </Head>
      <main className="flex flex-col items-center justify-center p-5">
        <h1 className="p-4 text-center text-5xl font-bold">{title}</h1>
        <h2 className="p-3 text-xl font-bold"> By: {author} </h2>
        <p className="p-2 text-justify"> {content} </p>
      </main>

      <PostComments comments={comments} />
    </>
  );
}

async function getPostData(slug: string) {
  const postData = data.posts.find((post: Post) => post.slug === slug);
  return postData;
}
