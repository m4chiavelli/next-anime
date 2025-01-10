/** @type {import('next').NextConfig} */

// import { webpack } from "next/dist/compiled/webpack/webpack";

// const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "cdn.myanimelist.net",
      },
      {
        hostname: "avatars.githubusercontent.com",
      },
    ],
  },
};

export default nextConfig;
