"use client";
export default function CommentForm({newComment}) {

  
  function handleSubmit(event) {
    event.preventDefault();

    const commentFormData = new FormData(event.target);
    const commentData = Object.fromEntries(commentFormData); 
    
    console.log(commentData)


    newComment(commentData);
    
    event.target.reset();
  }

  

  function handleChange(event) {
    
  }

return (
    <div className="flex flex-col items-center justify-center p-4 bg-white rounded shadow mt-6">
    <h2 className="text-2xl font-bold mb-4 text-blue-600">Comment</h2>
    <form onSubmit={handleSubmit} className="space-y-4 w-full">
        <input
        name="username"
        placeholder="Enter username"
        onChange={handleChange}
        required
        className="w-full px-3 py-2 border rounded"
        />
        <input
        name="comment"
        placeholder="Reply"
        onChange={handleChange}
        required
        className="w-full px-3 py-2 border rounded"
        />
        <button
        type="submit"
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
    Submit
        </button>
    </form>
    </div>
  );
}