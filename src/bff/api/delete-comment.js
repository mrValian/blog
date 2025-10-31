export const deleteComment = async (commentId) =>
	fetch(`http://localhost:3000/comments/${commentId}`, {
		method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
		headers: {
			'Content-Type': 'application/json',
			// 'Content-Type': 'application/x-www-form-urlencoded',
		},
	});
