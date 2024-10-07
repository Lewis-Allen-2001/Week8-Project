"use client";

export default function DeleteButton({ postId, handleDelete }) {
  return (
    <button
      onClick={() => handleDelete(postId)}
      className="mt-2 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
    >
      Delete
    </button>
  );
}
