import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	/* config options here */
	images: {
		domains: [
			"cdn-icons-png.flaticon.com",
			"learn.wrikka.com",
			"vitejs.dev",
			"reactjs.org",
			"angular.io",
			"vuejs.org",
			"www.solidjs.com",
			"svelte.dev",
			"qwik.builder.io",
			"astro.build",
			"remix.run",
			"deno.land",
			"lit.dev",
			"preactjs.com",
			"ruby-lang.org",
			"rubyonrails.org",
			"cdn.shopify.com",
			"nx.dev",
			"laravel.com",
			"www.apollographql.com",
			"www.electronjs.org",
		],
	},
	// ปิดการแสดง warning ต่างๆ
	onDemandEntries: {
		// ปิดการแสดง "Creating an optimized production build ..."
		maxInactiveAge: 25 * 1000,
		pagesBufferLength: 2,
	},
	// ปิดการแสดง deprecation warnings
	webpack: (config, { isServer }) => {
		// ปิด punycode warning
		config.ignoreWarnings = [{ module: /node_modules\/punycode/ }];
		return config;
	},
};

export default nextConfig;
