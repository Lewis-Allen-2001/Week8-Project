
import CommentForm from "@/app/Components/CommetForm";
import {db} from "@/app/utils/db"



export default async function SinglePost({params}) {
  
    async function createComment(commentData) {
      'use server';
      try {
        const stuff = await db().query('INSERT INTO  comments (username, comment) VALUES ($1, $2)', [commentData.username, commentData.comment]);
      } catch (e) {
  console.error(e);
      }
    }

    const posts = (await db().query(`SELECT * FROM posts WHERE id = $1;`, [params.id])).rows[0];
    const comments = (await db().query(`SELECT * FROM comments WHERE id = $1;`, [params.id])).rows[0];

    return (
      
        <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
          <div className="w-full max-w-lg p-6 bg-white rounded shadow">

            <h1 className="text-2xl font-bold mb-4 text-blue-600">{posts.username} said :</h1>
            <p className="text-lg text-blue-600">{posts.post}</p>
            
            <h1 className="text-2xl font-bold mb-4 text-blue-600">{comments.username} Commented :</h1>
            <p className="text-lg text-blue-600">{comments.comment}</p>

            <CommentForm newComment={createComment} />

            <a href="/Posts" className="text-blue-600 hover:underline mt-4 block">Back to Posts</a>
          </div>
        </div>
      );
    }
