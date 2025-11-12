import { useEffect, useState } from 'react';
import styled from 'styled-components';

const FooterContainer = ({ className }) => {
	const [city, setCity] = useState('');
	const [temp, setTemp] = useState('');
	const [weather, setWeather] = useState('');

	useEffect(() => {
		fetch(
			'http://api.openweathermap.org/data/2.5/weather?q=Moscow&lang=ru&units=metric&appid=112955ec020467284a1a0c2bd3899914',
		)
			.then((response) => response.json())
			.then(({ name, main, weather }) => {
				setCity(name);
				setTemp(Math.round(main.temp));
				setWeather(weather[0].description);
			});
	}, []);

	return (
		<div className={className}>
			<div>
				<div>Блог веб-разработчика</div>
				<div>web@developer.ru</div>
			</div>
			<div>
				<div>{city}, {new Date().toLocaleString('ru', {day: 'numeric', month: 'long'})}</div>
				<div>
					{temp} градусов, {weather}
				</div>
			</div>
		</div>
	);
};

export const Footer = styled(FooterContainer)`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 20px 40px;
	box-shadow: 0 2px 17px #000;
	height: 120px;
    font-weight: bold;
`;
