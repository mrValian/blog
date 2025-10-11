import { sessions } from '../sessions';
import { getUser, addUser } from '../api';

export const register = async (regLogin, regPassword) => {
	const existedUser = await getUser(regLogin);

	if (existedUser) {
		return {
			error: 'Такой пользователь существует',
			res: null,
		};
	}

	const user = await addUser(regLogin, regPassword);

	const { id, login, role_id } = user;

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
};
