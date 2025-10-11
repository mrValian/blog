import { logout, register, authorize, fetchUsers, fetchRoles, updateUserRole, removeUser } from './operations';
// import { logout } from './operations/logout';

export const server = {
	authorize,
	register,
	logout,
	fetchUsers,
	fetchRoles,
	updateUserRole,
	removeUser,
};
