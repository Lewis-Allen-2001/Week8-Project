import Link from 'next/link';
import PostForm from '../Components/PostForm';
import DeleteButton from '../Components/DeleteButton';
import { db } from '../utils/db'

export default async function PostsFeed({ searchParams }) {
  let sortQuery = 'ORDER BY id ASC';
  if (searchParams.sortBy === 'desc') {
    sortQuery = 'ORDER BY id DESC';
  }

  const posts = await db().query(`SELECT * FROM posts ${sortQuery}`);
  const feed = posts.rows;

  async function createPost(postData) {
    'use server';
    try {
      await db().query('INSERT INTO posts (username, post) VALUES ($1, $2)', [postData.username, postData.post]);
    } catch (e) {
      console.error(e);
    }
  }

  async function handleDelete(postId) {
    'use server';
    try {
      await db().query('DELETE FROM posts WHERE id = $1', [postId]);
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
      <h2 className="text-3xl text-blue-600 font-bold mb-6">POST FEED</h2>
      
      <PostForm newPost={createPost} />

      <div className="mb-4">
        <Link href='/Posts?sortBy=asc' className="mr-4 text-blue-600 hover:underline">
          Sort Posts Ascending
        </Link>
        <Link href='/Posts?sortBy=desc' className="text-blue-600 hover:underline">
          Sort Posts Descending
        </Link>
        <Link href='/Posts' className="ml-4 text-blue-600 hover:underline">
          Remove Post Sorting
        </Link>
      </div>

      <div className="w-full max-w-lg mt-6 space-y-4">
        {feed.map(post => (
          <div key={post.id} className="p-4 bg-white rounded shadow text-black">
            <h2 className="text-xl font-semibold">{post.username}:</h2>
            <Link href={`Posts/${post.id}`} className="text-black hover:underline">
              {post.post}
            </Link>
            
            <DeleteButton postId={post.id} handleDelete={handleDelete} />
          </div>
        ))}
      </div>
    </div>
  );
}
