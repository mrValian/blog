import { sessions } from '../sessions';
import { getUser } from '../api';

export const authorize = async(authLogin, authPassword) => {
        const user = await getUser(authLogin);

        if (!user) {
            return {
                error: 'Такой пользователь не найден',
                res: null,
            };
        }

        const {id, login, password, roleId} = user;

        if (authPassword !== password) {
            return {
                error: 'Неверный пароль',
                res: null,
            };
        }

        const session = sessions.create(user);

        return {
            error: null,
            res: {
                id: id,
                login: login,
                roleId: roleId,
                session: session,
            },
        };
    };
