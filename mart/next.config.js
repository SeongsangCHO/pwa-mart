/** @type {import('next').NextConfig} */
const settings = {
  reactStrictMode: true,
};
const withPWA = require("next-pwa")({
  dest: "public",
});

module.exports =
  process.env.NODE_ENV === "development"
    ? settings
    : withPWA({
        // config

        reactStrictMode: true,
      });
