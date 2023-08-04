import { defineConfig, Options } from 'tsup';

export default defineConfig((options: Options) => ({
	entry: ['src/index.ts'],
	format: ['cjs', 'esm'],
	dts: true,
	splitting: true,
	minify: 'terser',
	clean: true,
	treeshake: true,
	...options,
}));
