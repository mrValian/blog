import styled from 'styled-components';

import { Link, useNavigate } from 'react-router-dom';

import { Icon } from '../../../icon';

const RightAlight = styled.div`
	display: flex;
	justify-content: flex-end;
`;

const StyledLink = styled(Link)`
	font-size: 18px;
	width: 100px;
	height: 32px;
	border: 1px solid #000;
	border-radius: 5px;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #eee;
`;

const ControlPanelContainer = ({ className }) => {
	const navigate = useNavigate();

	return (
		<div className={className}>
			<RightAlight>
				<StyledLink to="/login">Войти</StyledLink>
			</RightAlight>
			<RightAlight>
				<Link to='#' onClick={() => navigate(-1)}>
					<Icon id="fa-backward" margin="10px 0 0 0" />
				</Link>
				<Link to="/post">
					<Icon id="fa-file-text-o" margin="10px 0 0 17px" />
				</Link>
				<Link to="/users">
					<Icon id="fa-users" margin="10px 0 0 17px" />
				</Link>
			</RightAlight>
		</div>
	);
};

export const ControlPanel = styled(ControlPanelContainer)``;
