import styled from 'styled-components';
import { Logo, ControlPanel } from './components';

const Discription = styled.div`
    font-style: italic;
`;

const HeaderContainer = ({ className }) => { 

    return (
		<header className={className}>
			<Logo />
            <Discription>
                Веб-технолохии <br />
                Написание кода <br />
                Разбор ошибок
            </Discription>
            <ControlPanel />
		</header>
	);
};

export const Header = styled(HeaderContainer)`
    position: fixed;
    top: 0;
    width: 1000px;
    background-color: #fff;
	height: 120px;
    padding: 20px 40px;
    box-shadow: 0 -2px 17px #000;
    display: flex;
    justify-content: space-between;
`;
