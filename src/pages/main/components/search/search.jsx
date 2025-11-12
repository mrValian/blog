import styled from 'styled-components';
import { Icon, Input } from '../../../../components';
import PropTypes from 'prop-types';

const SearchContainer = ({ className, onChange, searchPrase }) => {
	return (
		<div className={className}>
			<Input value={searchPrase} onChange={onChange} placeholder='Поиск...' />
			<Icon inactive={true} id="fa-search" margin="0 0 0 0" size="18px" />
		</div>
	);
};

export const Search = styled(SearchContainer)`
	display: flex;
	position: relative;
	width: 340px;
	height: 40px;
	margin: 0 auto;
	margin-top: 20px;

	& > input {
		padding: 10px 35px 10px 10px;
	}

	& > div {
		position: absolute;
		right: 10px;
		top: 7px;
	}
`;

Search.PropTypes = {
	onChange: PropTypes.func.isRequired,
	searchPrase: PropTypes.string.isRequired,
};
