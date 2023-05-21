import NewPost from '@/components/NewPost';
import { PostPreview } from '@/components/PostPreview';
import { Post } from '@/typings';
import Head from 'next/head';

export default async function Blog() {
  const databaseData = await getBlogPosts();
  const posts = databaseData.posts;
  return (
    <>
      <Head>
        <title>My Blog</title>
      </Head>
      <main className="flex flex-col items-center justify-center p-5">
        <h1 className="text-center text-5xl font-bold">Blog Exercise</h1>

        <ul className="p-5">
          {posts.map((post: Post) => (
            <li key={post.id}>
              <PostPreview data={post} />
            </li>
          ))}
        </ul>
        <NewPost />
      </main>
    </>
  );
}

async function getBlogPosts() {
  const res = await fetch('http://localhost:3000/api/v1/blog/post', { cache: 'no-store' });
  const databaseRecords = await res.json();
  return databaseRecords;
}
