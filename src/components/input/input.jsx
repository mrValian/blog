import styled from 'styled-components';

const InputContainer = ({ className, ...props }) => {

	return (
		<input className={className} {...props} />
	);
};

export const Input = styled(InputContainer)`
    width: ${({width = '100%'}) => width};
    height: 40px;
    padding: 10px;
    border: 1px solid #000;
    margin: 0 0 10px 0;
    font-size: 18px;
`;
