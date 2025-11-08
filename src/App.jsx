import { Routes, Route } from 'react-router-dom';

import styled from 'styled-components';

import { Header, Footer, Modal } from './components';
import { Authorization, Registration, Users, Post, Main } from './pages';
import { useLayoutEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from './action';

const AppColumn = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: 1000px;
	min-height: 100%;
	margin: 0 auto;
	background-color: #fff;
	position: relative;
`;

const Page = styled.div`
	padding: 120px 0 20px;
`;

export const App = () => {
	const dispatch = useDispatch();

	useLayoutEffect(() => {
		const currentUserData = JSON.parse(sessionStorage.getItem('userData'));

		if (!currentUserData) {
			return;
		}

		dispatch(setUser({
			...currentUserData,
			roleId: +currentUserData.roleId,
		}));

	}, [dispatch]);

	return (
		<AppColumn>
			<Header />
			<Page>
				<div>
					<Routes>
						<Route path="/" element={<Main />} />
						<Route path="/login" element={<Authorization />} />
						<Route path="/register" element={<Registration />} />
						<Route path="/users" element={<Users />} />
						<Route path="/post" element={<Post />} />
						<Route path="/post/:id" element={<Post />} />
						<Route path="/post/:id/edit" element={<Post />} />
						<Route path="*" element={<div>Error</div>} />
					</Routes>
				</div>
			</Page>
			<Footer />
			<Modal />
		</AppColumn>
	);
};
