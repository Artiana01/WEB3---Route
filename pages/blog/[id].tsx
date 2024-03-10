import { useRouter } from 'next/router';
import Link from 'next/link';
import Header from '@/pages/header';
import Footer from '@/pages/footer';
const blog = [
    { id: 1, contain: 'blog 1' },
    { id: 2, contain: 'blog 2' },
    { id: 3, contain: 'blog 3' },
    { id: 4, contain: 'blog 4' },
    { id: 5, contain: 'blog 5' }
]

const PostDetails = () => {
    const router = useRouter();
    const { id } = router.query;

    return (
        <>
            <Header />
            <main>
                <div className='blogContent'>

                    <ul>
                        <p>BLOG-LIST</p>
                        {blog.map(blog => (
                            <li key={blog.id}>
                                <Link href={`/blog/${blog.id}`}>{blog.contain}</Link>
                            </li>
                        ))}
                    </ul>
                    <div className="blogImg">
                        <h1>Blog-{id}</h1>
                        <Link href={`/blog/${id}/image`}>Voir l'image</Link>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
};

export default PostDetails;