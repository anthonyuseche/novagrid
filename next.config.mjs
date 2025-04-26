/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Necesario para exportación estática
  },
  // Opcional: si quieres que las URLs terminen con / y generen index.html
  // trailingSlash: true,
}

// next.config.mjs
export default nextConfig; // ✅ Correcto (sin "=" después de default)