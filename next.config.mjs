const repoBasePath = process.env.NEXT_PUBLIC_BASE_PATH || '/asma-portfolio'
const isProduction = process.env.NODE_ENV === 'production'
const basePath = isProduction ? repoBasePath : ''

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  trailingSlash: true,
  basePath: basePath || undefined,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
}

export default nextConfig
