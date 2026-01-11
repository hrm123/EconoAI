import { getBlogPosts } from '@/lib/strapi';
import BlogCard from '@/components/BlogCard';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Blog - EconoAI',
    description: 'Read the latest insights on AI, web development, and technology from EconoAI.',
};

export default async function BlogPage() {
    const posts = await getBlogPosts();

    return (
        <div className="container mx-auto px-4 py-12">
            {/* Header */}
            <div className="text-center mb-12">
                <h1 className="text-5xl font-bold mb-4">Blog</h1>
                <p className="text-xl text-base-content/70 max-w-2xl mx-auto">
                    Insights on AI, web development, and the future of technology
                </p>
            </div>

            {/* Blog Posts Grid */}
            {posts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.map((post) => (
                        <BlogCard key={post.id} post={post} />
                    ))}
                </div>
            ) : (
                <div className="text-center py-16">
                    <div className="alert alert-info inline-flex max-w-md">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current shrink-0 w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        <span>No blog posts available yet. Check back soon!</span>
                    </div>
                </div>
            )}
        </div>
    );
}
