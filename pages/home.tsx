import Link from "next/link";
import "../pages/home.css";
import Header from "@/pages/header";
import Footer from "@/pages/footer";


const blog = [
    { id: 1, contain: 'blog 1' },
    { id: 2, contain: 'blog 2' },
    { id: 3, contain: 'blog 3' },
    { id: 4, contain: 'blog 4' },
    { id: 5, contain: 'blog 5' }
]
export default function home() {
    return (
        <div>
            <Header/>
            <main>
                <h1>HOME</h1>
                <ul>
                    {blog.map(blog => (
                        <li key={blog.id}>
                            <Link href={`/blog/${blog.id}`}>{blog.contain}</Link>
                        </li>
                    ))}
                </ul>
            </main>
            <Footer/>
        </div>
    )
}