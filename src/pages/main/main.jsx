import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useServerRequest } from '../../hooks';
import { PostCard } from './components';

const MainContainer = ({ className }) => {
	const requestServer = useServerRequest();
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		requestServer('fetchPosts').then((posts) => {

            setPosts(posts.res);

        });
	}, [requestServer]);


	return (
		<div className={className}>
			<div className="post-list">
				{posts.map(({ id, title, publishedAt, commentsCount, imageUrl }) => (
					<PostCard
						key={id}
						id={id}
						title={title}
						publishedAt={publishedAt}
						commentsCount={commentsCount}
						imageUrl={imageUrl}
					/>
				))}
			</div>
		</div>
	);
};

export const Main = styled(MainContainer)`
    & .post-list {
        display: flex;
        flex-wrap: wrap;
        gap: 40px;
        padding: 20px 40px;
    }
`;
