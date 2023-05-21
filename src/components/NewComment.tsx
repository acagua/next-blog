'use client';
import { FormEvent, useState } from 'react';

export default function NewComment({ id }: { id: string }) {
  const [requestMessage, setRequestMessage] = useState('');
  const [content, setContent] = useState('');

  const handleOnChange = (e: FormEvent<HTMLTextAreaElement>) => {
    setContent(e.currentTarget.value);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:3000/api/v1/blog/post/comment/${id}`, {
        method: 'POST',
        cache: 'no-store',
        body: JSON.stringify({ content, userId: 1, postId: id }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        setRequestMessage('Comment added!');
        setContent('');
      } else {
        const error = await response.json();
        setRequestMessage(error.message);
      }
    } catch (error) {
      setRequestMessage('Something went wrong');
    }
  };

  return (
    <section className="w-full p-5">
      <form onSubmit={handleSubmit} className="flex grow flex-col">
        <textarea
          id="content"
          className="rounded-md border-2 p-2 text-xl"
          name="content"
          required
          onChange={handleOnChange}
          value={content}
        />
        <button type="submit" className="text-bold mt-2 rounded-md bg-black p-3 text-xl text-white">
          Submit
        </button>
      </form>
      {requestMessage && <p> {requestMessage} </p>}
    </section>
  );
}
