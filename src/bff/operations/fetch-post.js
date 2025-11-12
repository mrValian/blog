import { getPost } from '../api';
import { getPostCommetnsWithAuthor } from '../utils';

export const fetchPost = async (postId) => {
	let post;
	let error;

	try {
		post = await getPost(postId);
	} catch (postError) {
		error = postError;
	}

    if (error) {
        return {
            error: error,
            res: null,
        };
    }

	const commentsWithAuthor = await getPostCommetnsWithAuthor(postId);

	return {
		error: null,
		res: {
			...post,
			comments: commentsWithAuthor,
		},
	};
};
