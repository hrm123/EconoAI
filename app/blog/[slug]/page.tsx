import { getBlogPostBySlug, getAllBlogSlugs, getStrapiImageUrl, BlogPost } from '@/lib/strapi';
import Image from 'next/image';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

interface BlogPostPageProps {
    params: Promise<{
        slug: string;
    }>;
}

// Generate metadata for SEO
export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
    const { slug } = await params;
    const post = await getBlogPostBySlug(slug);

    if (!post) {
        return {
            title: 'Post Not Found - EconoAI',
        };
    }

    return {
        title: `${post.title} - EconoAI Blog`,
        description: post.excerpt || post.title,
    };
}

// Generate static paths for all blog posts
export async function generateStaticParams() {
    debugger;
    const blogPostsEmpty: BlogPost[] = [{
        title:'nothing found', 
        slug:'nothing found', 
        content:'', 
        publishedAt: new Date().toISOString(), createdAt: new Date().toISOString(), updatedAt: new Date().toISOString(), id: 0, documentId: ''}];
    return blogPostsEmpty;
    /*
    const slugs = await getAllBlogSlugs();
    return slugs.map((slug) => ({
        slug,
    }));
    */
    // stragely when this API call returns empty array (due to exception etc) the error shown by NextJS is differente - it shows
    //  "Error: missing generateStaticParams()"
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
    const { slug } = await params;
    const post = await getBlogPostBySlug(slug);

    if (!post) {
        notFound();
    }

    const imageUrl = getStrapiImageUrl(post.coverImage);
    const publishDate = new Date(post.publishedAt).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    return (
        <article className="container mx-auto px-4 py-12 max-w-4xl">
            {/* Back to Blog Link */}
            <Link href="/blog" className="btn btn-ghost btn-sm mb-8">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                </svg>
                Back to Blog
            </Link>

            {/* Hero Image */}
            {post.coverImage && (
                <div className="relative w-full h-96 mb-8 rounded-lg overflow-hidden">
                    <Image
                        src={imageUrl}
                        alt={post.coverImage.alternativeText || post.title}
                        fill
                        className="object-cover"
                        priority
                        sizes="(max-width: 1200px) 100vw, 1200px"
                    />
                </div>
            )}

            {/* Post Header */}
            <header className="mb-8">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">{post.title}</h1>
                <div className="flex items-center gap-4 text-base-content/70">
                    {post.author && (
                        <div className="flex items-center gap-2">
                            <div className="avatar placeholder">
                                <div className="bg-neutral text-neutral-content rounded-full w-10">
                                    <span className="text-xl">{post.author[0].toUpperCase()}</span>
                                </div>
                            </div>
                            <span className="font-medium">{post.author}</span>
                        </div>
                    )}
                    <span>•</span>
                    <time dateTime={post.publishedAt}>{publishDate}</time>
                </div>
            </header>

            {/* Post Content */}
            <div className="prose prose-lg max-w-none">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {post.content}
                </ReactMarkdown>
            </div>

            {/* Divider */}
            <div className="divider my-12"></div>

            {/* Back to Blog CTA */}
            <div className="text-center">
                <Link href="/blog" className="btn btn-primary">
                    View All Posts
                </Link>
            </div>
        </article>
    );
}
