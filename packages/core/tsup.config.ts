import { defineConfig, type Options } from 'tsup';

export default defineConfig((options: Options) => ({
	entry: ['src/index.ts'],
	format: ['cjs', 'esm'],
	external: ['react'],
	target: 'es2019',
	dts: true,
	splitting: true,
	minify: 'terser',
	treeshake: true,
	clean: true,
	...options,
}));
