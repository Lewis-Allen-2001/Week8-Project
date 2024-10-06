import pg from "pg"

export default async function SinglePost({params}) {
    const db = new pg.Pool({
        connectionString: process.env.DB_URL
    });

    const post = (await db.query(`SELECT * FROM posts WHERE id = $1;`, [params.id])).rows[0];

    return (
        <div>
        <h1>{post.username}:</h1>
        <h1>{post.post}</h1>
        </div>
    );
}