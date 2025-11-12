export const getRoles = () => {
	return fetch(`http://localhost:3000/roles`).then((loadedRoles) => loadedRoles.json());
};
