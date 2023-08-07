import Link from 'next/link';
import getPosts from '@/app/libs/Post/getPosts';

export default async function Posts() {
    const posts = await getPosts();
    return (
        <div className="min-h-full flex flex-col justify-center items-center">
            <p className="text-2xl">Posts Page - random content</p>
            (User single page is SSG, while Post single page is SSR)
            <table className="table-auto mt-10 scroll:auto h-full">
                <thead className="border border-slate-400">
                    <tr>
                    <th className="border border-slate-400">Id</th>
                    <th>Title</th>
                    </tr>
                </thead>
                <tbody className="border border-slate-400">
                {posts.map((post: any) => (
                    <tr className="border border-slate-400">
                        <td className="border border-slate-400">{post.id}</td>
                        <Link key={post.id} href={`/posts/${post.id}`}>
                            <td className="hover:underline">{post.title}</td>
                        </Link>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}

