import { error } from '@sveltejs/kit';
// Example of a page load file
/** @type {import('./$types').PageLoad} */
export function load({ params }) {
	if (params.slug === 'hello-world') {
		return {
			title: 'Hello world!',
			content: 'Welcome to our blog. Lorem ipsum dolor sit amet...',
		};
	}

	throw error(404, 'Not found');
}
