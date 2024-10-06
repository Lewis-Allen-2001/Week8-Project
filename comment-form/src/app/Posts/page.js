import Link from 'next/link';
import PostForm from '@/app/Components/PostForm';
import {db} from "@/app/utils/db"


export default async function PostsFeed() {


  const posts = await db().query('SELECT * FROM posts');
  const feed = posts.rows;

  async function createPost(postData) {
    'use server';
    try {
      const stuff = await db().query('INSERT INTO posts (username, post) VALUES ($1, $2)', [postData.username, postData.post]);
    } catch (e) {
console.error(e);
    }

    //console.log(postData);
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
      <h2 className="text-3xl text-blue-600 font-bold mb-6">POST FEED</h2>
      
      <PostForm newPost={createPost} />

      <div className="w-full max-w-lg mt-6 space-y-4">
        {feed.map(post => (
          <div key={post.id} className="p-4 bg-white rounded shadow text-black">
            <h2 className="text-xl font-semibold">{post.username}:</h2>
            <Link href={`Posts/${post.id}`} className="text-black hover:underline">
              {post.post}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
