import { defineConfig, configDefaults } from "vitest/config";

export default defineConfig({
	test: {
		// use to 'jsdom' or 'happy-dom' if building a browser package
		// https://vitest.dev/config/#environment
		environment: "happy-dom",
		setupFiles: ["./test/setup.ts"],
		coverage: {
			include: ["packages/*/**/*.test.{ts,tsx,js,jsx}"],
			exclude: [...configDefaults.exclude],
		},
	},
});
