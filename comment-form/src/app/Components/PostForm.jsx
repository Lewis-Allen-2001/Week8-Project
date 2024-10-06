"use client";

import { useState } from "react";

export default function PostForm() {
  const [post, setPost] = useState({username: "" , post: ""});
  

  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const postData = Object.fromEntries(formData); 
    
    console.log(postData)


    //setPost({username: "", post: ""});
    event.target.reset();
  }

  function handleChange(event) {
    setPost(event.target.value);
    
  }

  return (
    <>
    <h2>whats on your mind?</h2>
    <form onSubmit={handleSubmit}>
        <input
        name="username"
        placeholder="enter username"
        onChange={handleChange}
        value={post.username}
        />

<input
        name="post"
        placeholder="whats on your mind?"
        onChange={handleChange}
        value={post.post}
        />
        <button>Submit</button>
    </form>
    </>
  );
}