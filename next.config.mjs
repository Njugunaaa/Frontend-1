import path from 'node:path';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  outputFileTracingRoot: path.join(process.cwd()),
  // Existing React views remain importable from src/pages during the migration,
  // but only files ending in .page.jsx are Next.js route files.
  pageExtensions: ['page.jsx', 'page.js', 'js'],
};

export default nextConfig;
