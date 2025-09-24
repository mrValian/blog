import styled from 'styled-components';

const Div = styled.div`
	text-align: center;
	color: red;
	font-size: 50px;
`;

export const App = () => {

	return (
		<div>
			<div><i className="fa fa-camera-retro fa-lg"></i> fa-lg</div>
			<Div>456</Div>
		</div>
	);
};


