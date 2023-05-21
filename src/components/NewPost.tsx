'use client';

import { Post } from '@/typings';
import { FormEvent, useState } from 'react';

const initlaState = {
  userId: 1,
  title: '',
  slug: '',
  preview: '',
  content: '',
};

export default function NewPost() {
  const [requestMessage, setRequestMessage] = useState('');
  const [formData, setFormData] = useState(initlaState);

  const handleOnChange = (e: FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.currentTarget;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/api/v1/blog/post', {
        method: 'POST',
        cache: 'no-store',
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        setRequestMessage('Post created!');
        setFormData(initlaState);
      } else {
        const error = await response.json();
        setRequestMessage(error.message);
      }
    } catch (error) {
      setRequestMessage('Something went wrong');
    }
  };

  return (
    <section className="w-full">
      <h2 className="p-2 text-center text-2xl"> Create new Post:</h2>
      <form onSubmit={handleSubmit} className="flex grow flex-col">
        <label htmlFor="title" className="p-2 text-xl">
          Title
        </label>
        <input
          id="title"
          className="rounded-md border-2 p-2 text-xl"
          type="text"
          name="title"
          required
          onChange={handleOnChange}
          value={formData.title}
        />

        <label htmlFor="slug" className="p-2 text-xl">
          Slug
        </label>
        <input
          id="slug"
          className="rounded-md border-2 p-2 text-xl"
          type="text"
          name="slug"
          required
          onChange={handleOnChange}
          value={formData.slug}
        />
        <label htmlFor="preview" className="p-2 text-xl">
          Preview
        </label>
        <textarea
          id="preview"
          className="rounded-md border-2 p-2 text-xl"
          name="preview"
          required
          onChange={handleOnChange}
          value={formData.preview}
        />
        <label htmlFor="content" className="p-2 text-xl">
          Content
        </label>
        <textarea
          id="content"
          className="rounded-md border-2 p-2 text-xl"
          name="content"
          required
          onChange={handleOnChange}
          value={formData.content}
        />
        <button type="submit" className="text-bold mt-2 rounded-md bg-black p-3 text-xl text-white">
          Submit
        </button>
      </form>
      {requestMessage && <p> {requestMessage} </p>}
    </section>
  );
}
