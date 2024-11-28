import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Set the basePath for deployment in a subdirectory (GitHub Pages URL)
  basePath: '/saishashikant.github.io',  // Replace 'repository-name' with your actual GitHub repository name

  // Use assetPrefix to handle static assets (like images) correctly in a subdirectory
  assetPrefix: '/saishashikant.github.ios/',  // Replace with your GitHub repository name

  // Optional: Enable trailing slash if needed for your URLs
  // exportTrailingSlash: true,
};

export default nextConfig;
