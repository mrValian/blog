import { getSession, deleteSession, addSession } from './api';

export const sessions = {
	// list: {},
	create(user) {
		const hash = Math.random().toFixed(50);

		addSession(hash, user);
		// this.list[hash] = user;

		return hash;
	},
	async remove(hash) {
		const session = await getSession(hash);

		if (!session) {
			return;
		}

		deleteSession(session.id);
		// delete this.list[hash];
	},
	async access(hash, accessRoles) {
		const dbSession = await getSession(hash);
		// const user = this.list[hash];

		return !!dbSession.user && accessRoles.includes(dbSession.user.roleId);
	},
};
