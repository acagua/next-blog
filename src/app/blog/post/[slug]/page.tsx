import NewComment from '@/components/NewComment';
import { PostComments } from '@/components/PostComments';
import { data } from '@/data';
import { Post } from '@/typings';
import Head from 'next/head';

export default async function Post({ params: { slug } }: { params: { slug: string } }) {
  const postData = await getPostData(slug);
  if (!postData) {
    return <div>Post not found</div>;
  }
  const { id, title, content, email } = postData.post[0];

  const commentData = await getPostCommentsData(id);

  return (
    <>
      <Head>
        <title>My Blog - {title}</title>
      </Head>
      <main className="flex flex-col items-center justify-center p-5">
        <h1 className="p-4 text-center text-5xl font-bold">{title}</h1>
        <h2 className="p-3 text-xl font-bold"> By: {email} </h2>
        <p className="p-2 text-justify"> {content} </p>
      </main>

      <PostComments comments={commentData.comments} />
      <NewComment id={id} />
    </>
  );
}

async function getPostData(slug: string) {
  const res = await fetch(`http://localhost:3000/api/v1/blog/post/${slug}`, { cache: 'no-store' });
  const databaseRecords = await res.json();
  return databaseRecords;
}

async function getPostCommentsData(postId: string) {
  const res = await fetch(`http://localhost:3000/api/v1/blog/post/comment/${postId}`, {
    cache: 'no-store',
  });
  const databaseRecords = await res.json();
  return databaseRecords;
}
