/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {}, // ✅ Correcto (no "tallwindcss")
    autoprefixer: {},,
  },
};

export default config;
