import styled from 'styled-components';
import { Icon } from '../../../icon';
import { Link } from 'react-router-dom';

const LargeText = styled.div`
	font-size: 42px;
	font-weight: 600;
	line-height: 48px;
	margin: 17px 0 0 0;
`;

const SmallText = styled.div`
	font-size: 18px;
	font-weight: bold;
`;

const LogoContainer = ({ className }) => {
	return (
		<Link className={className} to='/' >
			<Icon id="fa-code" size="70px" margin="0 10px 0 0" />

			<div>
				<LargeText>Блог</LargeText>
				<SmallText>веб-разработчик</SmallText>
			</div>
		</Link>
	);
};

export const Logo = styled(LogoContainer)`
	display: flex;
	margin-top: -21px;
`;
