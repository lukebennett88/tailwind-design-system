import { defineConfig, type Options } from 'tsup';

export default defineConfig((options: Options) => ({
	entry: ['src/index.ts'],
	format: ['cjs', 'esm'],
	target: 'es2019',
	dts: true,
	splitting: true,
	minify: 'terser',
	clean: true,
	treeshake: true,
	...options,
}));
