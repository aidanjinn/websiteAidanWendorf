import adapter from '@sveltejs/adapter-static';
import sveltePreprocess from 'svelte-preprocess';
import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-vercel';
/** @type {import('@sveltejs/kit').Config} */


const config = {
	preprocess: preprocess(),
	kit: {
		adapter: vercel(),
		target: '#svelte',
		adapter: adapter()
	},
	extensions: ['.svelte', '.md'],

	preprocess: [
		sveltePreprocess(),
		mdsvex({
			extensions: ['.md']
		})
	]
};

export default config;
