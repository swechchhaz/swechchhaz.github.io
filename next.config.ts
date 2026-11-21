import type { NextConfig } from "next";

// "export" makes Next.js produce plain HTML/CSS/JS files in the "out" folder,
// which is all GitHub Pages can serve.
const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true }, // GitHub Pages has no image-resizing server
  trailingSlash: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
