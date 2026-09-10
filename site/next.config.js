/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    nname: 'AC-Workspaces-Reg',
    description: 'Specialized List of Apps for Workspaces.',
    icon: 'https://github.com/acaraballostt/workspaces-registry/1.0/site/workspaces.png',
    listUrl: 'https://github.com/acaraballostt/workspaces-registry/',
    contactUrl: 'https://github.com/acaraballostt/',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/workspaces-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
