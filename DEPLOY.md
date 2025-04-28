# Deploying to Netlify

This guide will walk you through deploying your Next.js application to Netlify.

## Prerequisites

- A [Netlify](https://www.netlify.com/) account
- Your project pushed to a Git repository (GitHub, GitLab, or Bitbucket)

## Deployment Steps

### Option 1: Deploy via Netlify UI

1. Log in to your Netlify account
2. Click on "New site from Git"
3. Connect to your Git provider and select your repository
4. Configure the build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
5. Click "Deploy site"

### Option 2: Deploy via Netlify CLI

1. Install the Netlify CLI globally:
   ```bash
   npm install -g netlify-cli
   ```

2. Login to Netlify:
   ```bash
   netlify login
   ```

3. Initialize your site:
   ```bash
   netlify init
   ```

4. Follow the prompts to configure your site

5. Deploy your site:
   ```bash
   netlify deploy --prod
   ```

## Important Notes

- A `netlify.toml` file has been added to your project with the necessary configuration
- Netlify will automatically detect that you're using Next.js and apply the appropriate build settings
- Your site will be rebuilt and redeployed automatically when you push changes to your repository

## Troubleshooting

If you encounter any issues during deployment:

1. Check the build logs in the Netlify dashboard
2. Ensure your Next.js version is compatible with Netlify
3. Verify that all environment variables are properly set in the Netlify dashboard if your app requires them