export const updatePost = ({id, imageUrl, content, title}) =>
    fetch(`http://localhost:3000/posts/${id}`, {
        method: 'PATCH', // *GET, POST, PUT, DELETE, etc.
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
            image_url: imageUrl,
            title: title,
            content: content,
        }), // body data type must match "Content-Type"
    }).then((loadedPost) => loadedPost.json());
