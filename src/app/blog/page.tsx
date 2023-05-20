import { PostPreview } from '@/components/PostPreview';
import { data } from '@/data';
import { Post } from '@/typings';
import Head from 'next/head';

export default async function Blog() {
  const data = await getData();
  return (
    <>
      <Head>
        <title>My Blog</title>
      </Head>
      <main className="flex flex-col items-center justify-center p-5">
        <h1 className="text-center text-5xl font-bold">Blog Exercise</h1>

        <ul className="p-5">
          {data.posts.map((post: Post) => (
            <li key={post.id}>
              <PostPreview data={post} />
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}

async function getData() {
  return data;
}
