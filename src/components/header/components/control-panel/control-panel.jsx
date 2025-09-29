import styled from 'styled-components';

import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Icon, Button } from '../../../index';
import { ROLE } from '../../../../constants';
import {
	selectUserRole,
	selectUserLogin,
	selectUserSession,
} from '../../../../selectors';
import { logout } from '../../../../action';

const RightAlight = styled.div`
	display: flex;
	justify-content: flex-end;
`;

const StyledDiv = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 15px;
	font-size: 20px;
	font-weight: bold;
`;

const ControlPanelContainer = ({ className }) => {
	const navigate = useNavigate();
	const roleId = useSelector(selectUserRole);
	const login = useSelector(selectUserLogin);
	const session = useSelector(selectUserSession);
	const dispatch = useDispatch();

	return (
		<div className={className}>
			<RightAlight>
				{roleId === ROLE.GUEST ? (
					<Button>
						<Link to="/login">Войти</Link>
					</Button>
				) : (
					<StyledDiv>
						<div>{login}</div>
						<Link to="#" onClick={() => dispatch(logout(session))}>
							<Icon id="fa-sign-out" margin="4px 0 0 0" />
						</Link>
					</StyledDiv>
				)}
			</RightAlight>
			<RightAlight>
				<Link to="#" onClick={() => navigate(-1)}>
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
