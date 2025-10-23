import { generateDate } from '../utils';

export const addComment = (userId, postId, content) =>
	fetch('http://localhost:3000/comments', {
		method: 'POST', // *GET, POST, PUT, DELETE, etc.
		mode: 'cors', // no-cors, *cors, same-origin
		cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
		credentials: 'same-origin', // include, *same-origin, omit
		headers: {
			'Content-Type': 'application/json',
			// 'Content-Type': 'application/x-www-form-urlencoded',
		},
		redirect: 'follow', // manual, *follow, error
		referrerPolicy: 'no-referrer', // no-referrer, *client
		body: JSON.stringify({
			author_id: userId,
			post_id: postId,
			published_at: generateDate(),
			content: content,
		}), // body data type must match "Content-Type"
	});
