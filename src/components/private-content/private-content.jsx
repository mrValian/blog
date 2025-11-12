import { useSelector } from 'react-redux';
import { Error } from '../error';
import { selectUserRole } from '../../selectors';
import { ERROR_MESAGE, PROP_TYPE } from '../../constants';
import { checkAccess } from '../../utils';
import PropTypes from 'prop-types';

export const PrivateContent = ({ children, serverError= null, access }) => {
	const userRole = useSelector(selectUserRole);

	const accessError = checkAccess(access, userRole) ? null : ERROR_MESAGE.ACCESS_DENIED;
	const error = serverError || accessError;

	return <>{error ? <Error error={error} /> : children}</>;
};

PrivateContent.PropTypes = {
	children: PropTypes.node.isRequired,
	access: PropTypes.arrayOf(PropTypes.oneOf(PROP_TYPE.ROLE_ID)).isRequired,
	serverError: PROP_TYPE.ERROR,
};
