import { useEffect, useState, useMemo } from 'react';
import styled from 'styled-components';
import { useServerRequest } from '../../hooks';
import { PostCard, Paginatgion, Search } from './components';
import { PAGINATION_LIMIT } from '../../constants';
import { getLastPageFromLinks, debounce } from '../../bff/utils';

const MainContainer = ({ className }) => {
	const requestServer = useServerRequest();
	const [posts, setPosts] = useState([]);
	const [page, setPage] = useState(1);
	const [lastPage, setLastPage] = useState(1);
	const [shouldSearch, setShouldSearch] = useState(false);
	const [searchPrase, setSearchPrase] = useState('');

	useEffect(() => {
		requestServer('fetchPosts', searchPrase, page, PAGINATION_LIMIT).then(
			({ res: { posts, links } }) => {
				setPosts(posts);
				setLastPage(getLastPageFromLinks(links));
			},
		);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [requestServer, page, shouldSearch]);

	const startDelaySearch = useMemo(() => debounce(setShouldSearch, 2000), []);

	const onSearch = ({ target }) => {
		setSearchPrase(target.value);
		startDelaySearch(!shouldSearch);
	};

	return (
		<div className={className}>
			<div className="post-and-search">
				<Search onChange={onSearch} searchPrase={searchPrase} />
				{posts.length > 0 ? (
					<div className="post-list">
						{posts.map(
							({ id, title, publishedAt, commentsCount, imageUrl }) => (
								<PostCard
									key={id}
									id={id}
									title={title}
									publishedAt={publishedAt}
									commentsCount={commentsCount}
									imageUrl={imageUrl}
								/>
							),
						)}
					</div>
				) : (
					<div className="no-posts-found">Статьи не найдены</div>
				)}
			</div>
			{lastPage > 1 && posts.length > 0 && (
				<Paginatgion lastPage={lastPage} setPage={setPage} page={page} />
			)}
		</div>
	);
};

export const Main = styled(MainContainer)`

	& .post-and-search {}

	& .post-list {
		display: flex;
		flex-wrap: wrap;
		gap: 40px;
		padding: 20px 40px 60px;
	}

	& .no-posts-found {
		text-align: center;
		font-size: 18px;
		margin-top: 40px;
	}
`;
