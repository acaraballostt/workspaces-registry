/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  distDir: '../public',
  env: {
    name: 'AC-Workspaces-Reg',
    description: 'Specialized List of Apps for Workspaces.',
    icon: 'workspaces.png',
    listUrl: 'https://github.com/acaraballostt/workspaces-registry/',
    contactUrl: 'https://github.com/acaraballostt/',
  },
  reactStrictMode: true,
  basePath: '/workspaces-registry/1.1',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
