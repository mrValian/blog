import { getUser } from './get-user';
import { addUser } from './add-user';
import { sessions } from './sessions';
// import { createSession } from './create-session'; 

export const server = {
	async logout (session) {
		sessions.remove(session);
	},
	async authorize(authLogin, authPassword) {
		const user = await getUser(authLogin);

		if (!user) {
			return {
				error: 'Такой пользователь не найден',
				res: null,
			};
		}

		if (authPassword !== user.password) {
			return {
				error: 'Неверный пароль',
				res: null,
			};
		}

		const {id, login, role_id} = user;

		const session = sessions.create(user);

		return {
			error: null,
			res: {
				id: id,
				login: login,
				roleId: role_id,
				session: session,
			},
		};
	},
	async register(regLogin, regPassword) {
		const existedUser = await getUser(regLogin);

		if (existedUser) {
			return {
				error: 'Такой пользователь существует',
				res: null,
			};
		}

		const user = await addUser(regLogin, regPassword);

		const {id, login, role_id} = user;

		const session = sessions.create(user);

		return {
			error: null,
			res: {
				id: id,
				login: login,
				roleId: role_id,
				session: session,
			},
		};
	},
};
