/** @type {import('next').NextConfig} */
const nextConfig = {
	assetPrefix: process.env.URL ?? undefined,
	headers: () => [
		{
			source: "/_next/:path*",
			headers: [
				{
					key: "Access-Control-Allow-Origin",
					value: "https://petjinski-app-shell.netlify.app",
				},
			],
		},
	],
};

module.exports = nextConfig;
