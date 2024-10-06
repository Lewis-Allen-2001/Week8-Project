"use client";
import { useRouter } from "next/navigation";

export default function PostForm({newPost}) {
  //const [post, setPost] = useState({username: "" , post: ""});
  
  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const postData = Object.fromEntries(formData); 
    
    console.log(postData)


    newPost(postData);
    //setPost({username: "", post: ""});
    event.target.reset();



    
  }

  function handleChange(event) {
    //setPost(event.target.value);
    
  }



const router = useRouter()

  return (
    <div className="flex flex-col items-center justify-center p-4 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4 text-blue-600">What is on your mind?</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="username"
          placeholder="Enter username"
          onChange={handleChange}
          //value={post.username}
          required
          className="w-full px-3 py-2 border rounded"
        />
        <input
          name="post"
          placeholder="What's on your mind?"
          onChange={handleChange}
          //value={post.post}
          required
          className="w-full px-3 py-2 border rounded"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 "
          onClick={() => router.push('/')}
        >
          Submit
        </button>
      </form>
    </div>
  );
}