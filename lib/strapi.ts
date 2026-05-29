// Strapi API Configuration
const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';
const STRAPI_API_TOKEN = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN || '';

// TypeScript Interfaces
export interface StrapiImage {
    id: number;
    url: string;
    alternativeText?: string;
    width: number;
    height: number;
}

export interface BlogPost {
    id: number;
    documentId: string;
    title: string;
    slug: string;
    content: string;
    excerpt?: string;
    coverImage?: StrapiImage;
    author?: string;
    publishedAt: string;
    createdAt: string;
    updatedAt: string;
}

export interface StrapiResponse<T> {
    data: T;
    meta?: {
        pagination?: {
            page: number;
            pageSize: number;
            pageCount: number;
            total: number;
        };
    };
}

// Helper function to get full image URL
export function getStrapiImageUrl(image: StrapiImage | undefined): string {
    if (!image) return '/placeholder-blog.jpg';

    // If URL is already absolute, return it
    if (image.url.startsWith('http')) {
        return image.url;
    }

    // Otherwise, prepend Strapi URL
    return `${STRAPI_URL}${image.url}`;
}

// Fetch all blog posts
export async function getBlogPosts(): Promise<BlogPost[]> {
    try {
        const blogPostsEmpty: BlogPost[] = [{title:'nothing found', slug:'', content:'', publishedAt: new Date().toISOString(), createdAt: new Date().toISOString(), updatedAt: new Date().toISOString(), id: 0, documentId: ''}];
        return blogPostsEmpty;
        /*
        const headers: HeadersInit = {
            'Content-Type': 'application/json',
        };

        if (STRAPI_API_TOKEN) {
            headers['Authorization'] = `Bearer ${STRAPI_API_TOKEN}`;
        }

        const response = await fetch(
            `${STRAPI_URL}/api/blog-posts?populate=*&sort=publishedAt:desc`,
            {
                headers,
                next: { revalidate: 60 }, // Revalidate every 60 seconds
            }
        );

        if (!response.ok) {
            throw new Error(`Failed to fetch blog posts: ${response.statusText}`);
        }

        const result: StrapiResponse<BlogPost[]> = await response.json();
        
        let responseOut;
        if(! result.data || result.data.length === 0) {
            console.warn('No blog posts found, returning empty array');
            responseOut = blogPostsEmpty;
        } else {
            responseOut = result.data;
        }
        
        return responseOut;
        */
    } catch (error) {
        console.error('Error fetching blog posts:', error);
        return [];
    }
}

// Fetch a single blog post by slug
export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
    try {
        const headers: HeadersInit = {
            'Content-Type': 'application/json',
        };

        if (STRAPI_API_TOKEN) {
            headers['Authorization'] = `Bearer ${STRAPI_API_TOKEN}`;
        }

        const response = await fetch(
            `${STRAPI_URL}/api/blog-posts?filters[slug][$eq]=${slug}&populate=*`,
            {
                headers,
                next: { revalidate: 60 },
            }
        );

        if (!response.ok) {
            throw new Error(`Failed to fetch blog post: ${response.statusText}`);
        }

        const result: StrapiResponse<BlogPost[]> = await response.json();
        return result.data?.[0] || null;
    } catch (error) {
        console.error('Error fetching blog post:', error);
        return null;
    }
}

// Get all blog post slugs for static generation
export async function getAllBlogSlugs(): Promise<string[]> {
    try {
        const posts = await getBlogPosts();
        return posts.map(post => post.slug);
    } catch (error) {
        console.error('Error fetching blog slugs:', error);
        return [];
    }
}
