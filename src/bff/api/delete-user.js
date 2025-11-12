export const deleteUser = (userId) =>
    fetch(`http://localhost:3000/users/${userId}`, {
        method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
        headers: {
            'Content-Type': 'application/json',
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
    });
