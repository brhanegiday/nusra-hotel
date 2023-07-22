// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   publicRuntimeConfig: {
//     NEXT_PUBLIC_STRAPI_URL: process.env.NEXT_PUBLIC_STRAPI_URL,
//   },
//   env: {
//     NEXT_PUBLIC_STRAPI_URL: process.env.NEXT_PUBLIC_STRAPI_URL,
//   },
//   images: {
//     domains: ["localhost"],
//   },
// };

// module.exports = nextConfig;

module.exports = {
  images: {
    domains: ["localhost", "nusra-api.onrender.com"],
  },
};
