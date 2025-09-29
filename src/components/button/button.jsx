import styled from 'styled-components';

const ButtonContainer = ({ children, className, ...props }) => {
	return (
		<button className={className} {...props}>
			{children}
		</button>
	);
};

export const Button = styled(ButtonContainer)`
	font-size: 18px;
	width: ${(width = '100%') => width};
	height: 32px;
	border: 1px solid #000;
	border-radius: 5px;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #eee;

    &:hover {
        cursor: pointer;
    }
`;
