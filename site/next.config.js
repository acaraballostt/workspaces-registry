/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  distDir: '../public',
  env: {
    name: 'AC-Workspaces-Reg',
    description: 'Specialized List of Apps for Workspaces.',
    icon: '/img/logo.svg',
    listUrl: 'https://github.com/acaraballostt/workspaces-registry/',
    contactUrl: 'https://github.com/acaraballostt/workspaces-registry/',
  },
  reactStrictMode: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
