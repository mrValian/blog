import {
	logout,
	register,
	authorize,
	fetchUsers,
	fetchRoles,
	updateUserRole,
	removeUser,
	fetchPost,
	addCommentToPost,
	removePostComment,
	savePost,
	removePost,
} from './operations';

export const server = {
	authorize,
	register,
	logout,
	fetchUsers,
	fetchRoles,
	updateUserRole,
	removeUser,
	fetchPost,
	addCommentToPost,
	removePostComment,
	savePost,
	removePost,
};
