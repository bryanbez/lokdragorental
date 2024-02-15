/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    removeConsole: false,
  },
  // images: {
  //   domains: ["lok-nft.leagueofkingdoms.com"], // The "images.domains" configuration is deprecated. Please use "images.remotePatterns" configuration instead
  // },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lok-nft.leagueofkingdoms.com",
        pathname: "/api/card/drago/**",
      },
    ],
  },
};

export default nextConfig;
