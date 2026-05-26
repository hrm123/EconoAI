import Link from 'next/link';
import Image from 'next/image';
import { BlogPost, getStrapiImageUrl } from '@/lib/strapi';

interface BlogCardProps {
    post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
    const imageUrl = getStrapiImageUrl(post.coverImage);
    const publishDate = new Date(post.publishedAt).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    return (
        <Link href={`/blog/${post.slug}`}>
            <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300 h-full">
                <figure className="relative h-48 w-full overflow-hidden">
                    <Image
                        src={imageUrl}
                        alt={post.coverImage?.alternativeText || post.title}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                </figure>
                <div className="card-body">
                    <h2 className="card-title line-clamp-2">{post.title}</h2>
                    {post.excerpt && (
                        <p className="text-base-content/70 line-clamp-3">{post.excerpt}</p>
                    )}
                    <div className="card-actions justify-between items-center mt-4">
                        <div className="text-sm text-base-content/60">
                            {post.author && <span className="font-medium">{post.author}</span>}
                            {post.author && <span className="mx-2">•</span>}
                            <span>{publishDate}</span>
                        </div>
                        <button className="btn btn-primary btn-sm">Read More</button>
                    </div>
                </div>
            </div>
        </Link>
    );
}
