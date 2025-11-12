import styled from 'styled-components';
import PropTypes from 'prop-types';

const TableRowContainer = ({ className, children }) => {
	return <div className={className}>{children}</div>;
};

export const TableRow = styled(TableRowContainer)`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    margin: 0 0 10px 0;

    & > div {
        display: flex;
    }
`;

TableRow.PropTypes = {
    children: PropTypes.node.isRequired,
};
