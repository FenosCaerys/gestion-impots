/* eslint-disable no-process-env */
import bunldeAnalyzer from "@next/bundle-analyzer"

/**
 * @type {import('next').NextConfig}
 */
let config = {
  output: "standalone",
  reactStrictMode: true,
  compiler: {
    styledComponents: false,
    styledJsx: false,
  },
  webpack: (config, { isServer }) => {
    // Désactiver complètement styled-jsx
    config.resolve.alias = {
      ...config.resolve.alias,
      'styled-jsx/style': false,
      'styled-jsx': false,
    }
    
    // Exclure styled-jsx du bundle
    config.externals = config.externals || []
    if (isServer) {
      config.externals.push('styled-jsx') 
    }
    
    return config
  },
  rewrites() {
    return [
      { source: "/healthz", destination: "/api/health" },
      { source: "/api/healthz", destination: "/api/health" },
      { source: "/health", destination: "/api/health" },
      { source: "/ping", destination: "/api/health" },
      { source: "/api/ping", destination: "/api/health" },
      // Réécriture pour la page de test WebRTC
      { source: "/test-webrtc.html", destination: "/test-webrtc" },
    ]
  },
  images: {
    remotePatterns: [
      {
        hostname: "randomuser.me",
      },

      {
        hostname: "lh3.googleusercontent.com",
      },
      {
        hostname: "i.pinimg.com",
      },
      {
        hostname: "em-content.zobj.net",
      },
      {
        hostname: "avatars.githubusercontent.com",
      },
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  redirects() {
    //? Permanent redirects only in prod env
    return [
      { source: "/signin", destination: "/sign-in", permanent: process.env.ENV === "production" ? true : false },
      { source: "/login", destination: "/sign-in", permanent: process.env.ENV === "production" ? true : false },
      { source: "/signup", destination: "/sign-up", permanent: process.env.ENV === "production" ? true : false },
      { source: "/register", destination: "/sign-up", permanent: process.env.ENV === "production" ? true : false },

      {
        source: "/:lang/signin",
        destination: "/:lang/sign-in",
        permanent: process.env.ENV === "production" ? true : false,
      },
      {
        source: "/:lang/login",
        destination: "/:lang/sign-in",
        permanent: process.env.ENV === "production" ? true : false,
      },
      {
        source: "/:lang/signup",
        destination: "/:lang/sign-up",
        permanent: process.env.ENV === "production" ? true : false,
      },
      {
        source: "/:lang/register",
        destination: "/:lang/sign-up",
        permanent: process.env.ENV === "production" ? true : false,
      },
    ]
  },
  experimental: {
    esmExternals: "loose",
  },
}

config = process.env.ANALYZE === "true" ? bunldeAnalyzer()(config) : config

export default config
