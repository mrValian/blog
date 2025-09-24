import { createElement, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from './assets/vite.svg';
import './App.css';

export const App = () => {
	const [count, setCount] = useState(1);
	const [date] = useState(new Date());

	return createElement(
		'div',
		null,
		createElement(
			'div',
			null,
			createElement(
				'a',
				{ href: 'https://vite.dev', target: '_blank' },
				createElement('img', {
					className: 'logo',
					alt: 'Vite logo',
					src: `${viteLogo}`,
				}),
			),
			createElement(
				'a',
				{ href: 'https://vite.dev', target: '_blank' },
				createElement('img', {
					className: 'logo react',
					alt: 'React logo',
					src: `${reactLogo}`,
				}),
			),
		),
		createElement('h1', null, 'Vite + React'),
		createElement(
			'div',
			{ className: 'card' },
			createElement(
				'button',
				{
					onClick: {
						function() {
							setCount(count +)
						},
					},
				},
				`count is ${count}`,
			),
			createElement(
				'p',
				null,
				'Edit ',
				createElement('code', null, 'src/App.jsx'),
				' and save to test HMR',
			),
		),
		createElement(
			'p',
			{ className: 'read-the-docs' },
			'Click on the Vite and React logos to learn more',
		),
		createElement(
			'div',
			null,
			createElement('span', null, 'Frontent'),
			createElement('div', null, `${new Date().getFullYear()}`),
		),
	);
};
