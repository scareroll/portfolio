import { withContentlayer } from "next-contentlayer";

/** @type {import('next').NextConfig} */
const nextConfig = {
	pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
	experimental: {
		mdxRs: true,
	},
	webpack: (config, { isServer }) => {
		config.infrastructureLogging = {
			level: "error", // Suppress all warnings in client and server bundles
		};
		return config;
	},
};

export default withContentlayer(nextConfig);
