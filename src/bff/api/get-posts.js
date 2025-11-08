import { transformPost } from '../transformers';

export const getPosts = (page, limit) =>
	fetch(`http://localhost:3000/posts?_page=${page}&_limit=${limit}`)
		.then((loadedPosts) => {
			// loadedPosts.json();
			return Promise.all([loadedPosts.json(), loadedPosts.headers.get('Link')]);
		})
		.then(([loadedPosts, links]) => ({
			posts: loadedPosts.map(transformPost),
			links: links,
		}));
