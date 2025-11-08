import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useServerRequest } from '../../hooks';
import { PostCard, Paginatgion } from './components';
import { PAGINATION_LIMIT } from '../../constants';
import { getLastPageFromLinks } from '../../bff/utils';

const MainContainer = ({ className }) => {
	const requestServer = useServerRequest();
	const [posts, setPosts] = useState([]);
	const [page, setPage] = useState(1);
	const [lastPage, setLastPage] = useState(1);

	useEffect(() => {
		requestServer('fetchPosts', page, PAGINATION_LIMIT).then(({res:{posts, links}}) => {

            setPosts(posts);
			setLastPage(getLastPageFromLinks(links));

        });
	}, [requestServer, page]);


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
			{lastPage > 1 && <Paginatgion lastPage={lastPage} setPage={setPage} page={page} />}
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
