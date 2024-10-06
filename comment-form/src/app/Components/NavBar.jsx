"use client"
import Link from "next/link"

export default function NavBar(){
    return(
        <div className="NavBar">
<Link href={"/"}>Home</Link>
<Link href={"/Posts"}>Post Feed</Link>
        </div>
    )
}