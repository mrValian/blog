import { useState } from 'react';
import styled from 'styled-components';
import { Icon } from '../../../../components';
import { Comment } from './components';
import {useServerRequest} from '../../../../hooks';
import { selectUserId } from '../../../../selectors';
import { addCommentAsync } from '../../../../action';
import { useDispatch, useSelector } from 'react-redux';

const CommentsContainer = ({ className, comments, postId }) => {
	const [newComment, setNewComment] = useState('');
	const userId = useSelector(selectUserId);
	const dispatch = useDispatch();
	const requestServer = useServerRequest();

	const onNewCommentAdd = (postId, userId, content) => {
		dispatch(addCommentAsync(requestServer, userId, postId, content));
		setNewComment('');
	};

	return (
		<div className={className}>
			<div className="new-comment">
				<textarea
					value={newComment}
					name="comment"
					id="comment"
					placeholder="Коментарий..."
					onChange={({ target }) => setNewComment(target.value)}
				></textarea>
				<Icon
					id="fa-paper-plane-o"
					margin="0 0 0 0"
					size="18px"
					onClick={() => onNewCommentAdd(userId, postId, newComment)}
				/>
			</div>
			<div className="comments">
				{comments.map(({ id, author, content, publishedAt }) => (
					<Comment
						key={id}
						id={id}
						author={author}
						content={content}
						publishedAt={publishedAt}
					/>
				))}
			</div>
		</div>
	);
};

export const Comments = styled(CommentsContainer)`
	width: 580px;
	margin: 0 auto;

	& .new-comment {
        margin: 20px 0 0 0;
		display: flex;
		width: 100%;

		& textarea {
			width: 100%;
            height: 100px;
            margin: 0 10px 0 0;
            resize: none;
            font-size: 18px;
            padding: 10px;
		}
	}
`;
