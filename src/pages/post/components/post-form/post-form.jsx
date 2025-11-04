import styled from 'styled-components';
import { useLayoutEffect, useRef, useState } from 'react';
import { Icon, Input } from '../../../../components';
import { SpecialPanel } from '../special-penal/special-penal';
import { sanitizeContent } from './utils';
import { useDispatch } from 'react-redux';
import { savePostAsync } from '../../../../action';
import { useNavigate } from 'react-router-dom';
import { useServerRequest } from '../../../../hooks';

const PostFormContainer = ({
	className,
	post: { id, title, imageUrl, content, publishedAt },
}) => {
	const [imageUrlValue, setImageUrlValue] = useState(imageUrl);
	const [titleValue, setTitleValue] = useState(title);

	const contentRef = useRef(null);

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const requestServer = useServerRequest();

	useLayoutEffect(() => {
		setImageUrlValue(imageUrl);
		setTitleValue(title);
	}, [imageUrl, title]);

	const onSave = () => {
		const newContent = sanitizeContent(contentRef.current.innerHTML);

		dispatch(
			savePostAsync(requestServer, {
				id: id,
				imageUrl: imageUrlValue,
				title: titleValue,
				content: newContent,
			}),
		).then(({id}) => navigate(`/post/${id}`));
	};

	return (
		<div className={className}>
			<Input
				onChange={({ target }) => setImageUrlValue(target.value)}
				value={imageUrlValue}
				placeholder="Изображение..."
			/>
			<Input
				onChange={({ target }) => setTitleValue(target.value)}
				value={titleValue}
				placeholder="Заголовок..."
			/>
			<SpecialPanel
				id={id}
				publishedAt={publishedAt}
				margin="20px 0"
				editButton={
					<Icon
						id="fa-floppy-o"
						margin="0 10px 0 0"
						size="18px"
						onClick={onSave}
					/>
				}
			/>
			<div
				ref={contentRef}
				contentEditable={true}
				suppressContentEditableWarning={true}
				className="post-text"
			>
				{content}
			</div>
		</div>
	);
};

export const PostForm = styled(PostFormContainer)`
	& img {
		float: left;
		margin: 0 30px 20px 0;
	}

	& .post-text {
		min-height: 80px;
		border: 1px solid #000;
		font-size: 18px;
		white-space: pre-line;
	}
`;
