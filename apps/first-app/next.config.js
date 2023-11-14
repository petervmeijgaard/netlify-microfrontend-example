/** @type {import('next').NextConfig} */
const nextConfig = {
	assetPrefix: process.env.URL ?? undefined,
};

module.exports = nextConfig;
