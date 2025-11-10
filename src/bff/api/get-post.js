import { transformPost } from '../transformers';

export const getPost = (postId) => {
    return fetch(`http://localhost:3000/posts/${postId}`)
        .then((res) => {
            if (res.ok) {
                return res;
            }

            if (res.status === 404) {
                return Promise.reject('Такая страница не существует');
            }

            return Promise.reject('Что-то пошло не так');
        })
        .then((loadedPost) => loadedPost.json())
        .then((loadedPost) => loadedPost && transformPost(loadedPost));
};
