
import Link from "next/link";
import PostForm from "@/app/Components/PostForm";
import pg from "pg";

export default async function PostsFeed() {
  const db = new pg.Pool({
    connectionString: process.env.DB_URL,
  });

  const posts = await db.query(`SELECT * FROM posts`);
  const feed = posts.rows;

  async function createPost(postData){
    "use server";
 await db.query('INSERT INTO posts (username, post) VALUES ($1, $2)', [username, post]);
    console.log(postData)
  }


  return (
    <div>
    <h2>POST FEED</h2>
    
    <PostForm newPost ={createPost}/>

    {feed.map((post) => (
        <div key={post.id}>
        <h2>{post.username}: </h2>
        <Link href={`Posts/${post.id}`}>{post.post}</Link>
        </div>
    ))}
    </div>
);
}
