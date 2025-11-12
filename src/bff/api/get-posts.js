import { transformPost } from '../transformers';

export const getPosts = (searchPrase, page, limit) =>
	fetch(`http://localhost:3000/posts?title_like=${searchPrase}&_page=${page}&_limit=${limit}`)
		.then((loadedPosts) => {
			// loadedPosts.json();
			return Promise.all([loadedPosts.json(), loadedPosts.headers.get('Link')]);
		})
		.then(([loadedPosts, links]) => ({
			posts: loadedPosts.map(transformPost),
			links: links,
		}));
