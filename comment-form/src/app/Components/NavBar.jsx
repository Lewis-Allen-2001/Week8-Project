"use client";
import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="bg-blue-600 p-4 text-white">
      <div className="flex justify-center space-x-4">
        <Link href="/" className="hover:underline">
          Home
        </Link>
        <Link href="/Posts" className="hover:underline">
          Post Feed
        </Link>
      </div>
    </nav>
  );
}
