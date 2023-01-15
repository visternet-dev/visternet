/** @type {import('next').NextConfig} */

const withTM = require("next-transpile-modules")([
  "@fullcalendar/common",
  "@babel/preset-react",
  "@fullcalendar/common",
  "@fullcalendar/daygrid",
  "@fullcalendar/interaction",
  "@fullcalendar/react",
  "@fullcalendar/timegrid",
  "@fullcalendar/list",
  "@fullcalendar/timeline"
]);

const nextConfig = withTM({
  reactStrictMode: true,
  images: {
    domains: ["imgur.com", "imgbox.com", "images2.imgbox.com"]
  }
});

module.exports = nextConfig;
