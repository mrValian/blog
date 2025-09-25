import { generateDate } from './generate-date';

export const addUser = (regLogin, regPassword) =>
	fetch('http://localhost:3000/users', {
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
			login: regLogin,
			password: regPassword,
			registed_at: generateDate(),
			role_id: 2,
		}), // body data type must match "Content-Type"
	});
