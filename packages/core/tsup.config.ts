import { defineConfig, Options } from 'tsup';

export default defineConfig((options: Options) => ({
	entry: ['src/**/*.ts'],
	format: ['cjs', 'esm'],
	external: ['react'],
	dts: true,
	splitting: true,
	minify: 'terser',
	treeshake: true,
	clean: true,
	...options,
}));
