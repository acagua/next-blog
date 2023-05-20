export const data = {
  posts: [
    {
      id: 'first-id',
      title: 'My first post',
      slug: 'my-first-post',
      preview:
        'This is my first post full description with a lot of content. And more content that is not visible in the preview.',
      content:
        'This is my first post full description with a lot of content. And more content that is not visible in the preview.',
      author: 'John Doe',
      comments: [
        {
          id: 'first-first-comment-id',
          content: 'This is my first comment',
          author: 'John Doe 2',
        },
      ],
    },
    {
      id: 'second-id',
      title: 'My second post',
      slug: 'my-second-post',
      preview: 'This is my second post',
      content: 'This is my second post full description',
      author: 'John Doe',
      comments: [],
    },
    {
      id: 'third-id',
      title: 'My third post',
      slug: 'my-third-post',
      preview: 'This is my third post',
      content: 'This is my third post full description',
      author: 'John Doe 2',
      comments: [
        {
          id: 'third-first-comment-id',
          content: 'This is my first comment',
          author: 'John Doe 3',
        },
        {
          id: 'third-second-comment-id',
          content: 'This is my second comment',
          author: 'John Doe 4',
        },
      ],
    },
  ],
};
