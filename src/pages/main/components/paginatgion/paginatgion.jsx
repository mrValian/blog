import styled from 'styled-components';
import { Button } from '../../../../components';
import PropTypes from 'prop-types';

const PaginationContainer = ({ className, setPage, page, lastPage }) => {
	return (
		<div className={className}>
			<Button
				disabled={page === 1}
				onClick={() => {
					setPage(1);
				}}
			>
				В начало
			</Button>
			<Button
				disabled={page === 1}
				onClick={() => {
					setPage(page - 1);
				}}
			>
				Преведущая
			</Button>
			<div className="current-page">{page}</div>
			<Button
				disabled={lastPage === page}
				onClick={() => {
					setPage(page + 1);
				}}
			>
				Сдедущая
			</Button>
			<Button
				disabled={lastPage === page}
				onClick={() => {
					setPage(lastPage);
				}}
			>
				В конец
			</Button>
		</div>
	);
};

export const Paginatgion = styled(PaginationContainer)`
	display: flex;
	position: absolute;
	bottom: 140px;
	width: 100%;
	justify-content: center;
	margin: 10px 0;
	gap: 10px;

	& .current-page {
		border: 1px solid #000;
		width: 50px;
		height: 32px;
		text-align: center;
		border-radius: 10px;
		padding: 2px;
	}
`;

Paginatgion.PropTypes = {
	setPage: PropTypes.func.isRequired,
	page: PropTypes.number.isRequired,
	lastPage: PropTypes.number.isRequired,
};
