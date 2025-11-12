export const deleteSession = async (sessionId) =>
	fetch(`http://localhost:3000/sessions/${sessionId}`, {
		method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
		headers: {
			'Content-Type': 'application/json',
			// 'Content-Type': 'application/x-www-form-urlencoded',
		},
	});
