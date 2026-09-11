/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    nname: 'AC-Workspaces-Reg',
    description: 'Specialized List of Apps for Workspaces.',
    icon: 'https://acaraballostt.github.io/workspaces-registry/1.0/icon.png',
    listUrl: 'https://acaraballostt.github.io/workspaces-registry/',
    contactUrl: 'https://github.com/acaraballostt/workspaces-registry/issues',
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
