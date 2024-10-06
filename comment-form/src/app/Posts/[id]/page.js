import pg from "pg"

export default async function SinglePost({params}) {
    const db = new pg.Pool({
        connectionString: process.env.DB_URL
    });

    const post = (await db.query(`SELECT * FROM posts WHERE id = $1;`, [params.id])).rows[0];

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
          <div className="w-full max-w-lg p-6 bg-white rounded shadow">
            <h1 className="text-2xl font-bold mb-4 text-blue-600">{post.username} said :</h1>
            <p className="text-lg text-blue-600">{post.post}</p>
            <a href="/Posts" className="text-blue-600 hover:underline mt-4 block">Back to Posts</a>
          </div>
        </div>
      );
    }
