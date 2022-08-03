/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	compiler: {
		styledComponents: true,
	},
	async redirects() {
		return [
			{
				source: '/',
				destination: '/profiles',
				permanent: true,
			},
		];
	},
	images: {
		domains: ['randomuser.me'],
	},
};

module.exports = nextConfig;
