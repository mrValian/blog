import { Routes, Route } from 'react-router-dom';

import styled from 'styled-components';

const Content = styled.div`
	padding: 120px 0;
`;

const H2 = styled.h2`
	text-align: center;
`;

const Header = () => {
	return (
		<>
			<h1>Шапка сайта</h1>
		</>
	);
}

const Footer = () => {
	return (
		<>
			<h1>Подвал сайта</h1>
		</>
	);
}

export const App = () => {
	return (
		<>
			<Header />
			<Content>
				<div>
					<H2>Контент страницы</H2>
					<p><i className="fa fa-camera-retro fa-lg"></i> fa-lg</p>
					<Routes>
						<Route path='/' element={<div>Main</div>} />
						<Route path='/login' element={<div>Login</div>} />
						<Route path='/register' element={<div>Registration</div>} />
						<Route path='/users' element={<div>Users</div>} />
						<Route path='/post' element={<div>New Post</div>} />
						<Route path='/post/:postId' element={<div>Post</div>} />
						<Route path='*' element={<div>Error</div>} />
					</Routes>
				</div>
			</Content>
			<Footer />
		</>
	);
};
