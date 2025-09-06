/** @type {import('next').NextConfig} */
module.exports = {
  output: "standalone",
  images: {
    domains: ["media.licdn.com"],
  },
  // Configurer les routes API dynamiques
  experimental: {
    serverComponentsExternalPackages: ["@prisma/client"],
  },
  // Désactiver le rendu statique pour certaines routes
  serverRuntimeConfig: {
    dynamicRoutes: true,
  },
  // Configurer les routes qui ne doivent pas être rendues statiquement
  async headers() {
    return [
      {
        source: "/api/:path*",
        headers: [{ key: "Cache-Control", value: "no-store, max-age=0" }],
      },
    ]
  },
}
