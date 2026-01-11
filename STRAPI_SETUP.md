# Strapi CMS Setup Guide for EconoAI Blog

This guide will help you set up Strapi CMS for your blog.

## Environment Variables

Add the following to your `.env.local` file:

```env
# Strapi Configuration
NEXT_PUBLIC_STRAPI_URL=https://your-strapi-instance.com
NEXT_PUBLIC_STRAPI_API_TOKEN=your-api-token-here
```

**For local development:**
```env
NEXT_PUBLIC_STRAPI_URL=http://localhost:1337
```

## Option 1: Local Strapi Setup

### 1. Install Strapi

In a separate directory (outside your Next.js project):

```bash
npx create-strapi-app@latest econoai-strapi --quickstart
```

### 2. Access Strapi Admin

- Strapi will automatically open at `http://localhost:1337/admin`
- Create your admin account

### 3. Create Blog Post Content Type

1. Go to **Content-Type Builder** in the sidebar
2. Click **Create new collection type**
3. Display name: `Blog Post`
4. Click **Continue**

5. Add the following fields:

   - **title** (Text)
     - Type: Short text
     - Required: Yes
   
   - **slug** (UID)
     - Type: UID
     - Attached field: title
     - Required: Yes
   
   - **content** (Rich Text)
     - Type: Rich text (Markdown)
     - Required: Yes
   
   - **excerpt** (Text)
     - Type: Long text
     - Required: No
   
   - **coverImage** (Media)
     - Type: Single media
     - Allowed types: Images
     - Required: No
   
   - **author** (Text)
     - Type: Short text
     - Required: No
   
   - **publishedAt** (Date)
     - Type: DateTime
     - Required: No

6. Click **Save** and wait for Strapi to restart

### 4. Configure Permissions

1. Go to **Settings** → **Roles** → **Public**
2. Expand **Blog-post**
3. Check the following permissions:
   - ✅ `find`
   - ✅ `findOne`
4. Click **Save**

### 5. Create Sample Blog Posts

1. Go to **Content Manager** → **Blog Post**
2. Click **Create new entry**
3. Fill in the fields:
   - Title: "Welcome to Our Blog"
   - Content: Add some markdown content
   - Excerpt: "A brief introduction to our blog"
   - Author: "EconoAI Team"
   - Cover Image: Upload an image
   - Published At: Set to current date/time
4. Click **Save** and **Publish**
5. Create 2-3 more sample posts

## Option 2: Cloud Deployment

### Recommended Platforms

1. **Strapi Cloud** (Easiest)
   - Visit: https://cloud.strapi.io
   - Sign up and create a new project
   - Follow the same content type setup as above
   - Copy your API URL and token to `.env.local`

2. **Railway**
   - Visit: https://railway.app
   - Deploy Strapi template
   - Configure environment variables
   - Follow content type setup

3. **DigitalOcean App Platform**
   - Create a new app from Strapi template
   - Configure database
   - Follow content type setup

4. **Heroku**
   - Use Strapi Heroku template
   - Add PostgreSQL addon
   - Follow content type setup

### After Cloud Deployment

1. Access your Strapi admin panel at `https://your-domain.com/admin`
2. Follow steps 3-5 from the local setup above
3. Update your `.env.local` with the production URL
4. If using API tokens, generate one in Settings → API Tokens

## Testing Your Blog

1. Start your Next.js development server:
   ```bash
   npm run dev
   ```

2. Visit `http://localhost:8383/blog`

3. You should see your blog posts displayed

4. Click on a post to view the full content

## Troubleshooting

### No posts showing up?
- Check that Strapi is running
- Verify the API URL in `.env.local`
- Ensure blog posts are published in Strapi
- Check public permissions are enabled

### Images not loading?
- Verify the image URLs in Strapi
- Check CORS settings in Strapi if using different domains
- Ensure images are uploaded and published

### API errors?
- Check browser console for error messages
- Verify Strapi API is accessible
- Check API token if using one

## Next Steps

- Customize the blog design in `app/blog/page.tsx`
- Add pagination for large numbers of posts
- Add categories or tags
- Implement search functionality
- Add SEO optimizations
