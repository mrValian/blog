import { useSelector } from 'react-redux';
import { Error } from '../error';
import { selectUserRole } from '../../selectors';
import { ERROR_MESAGE } from '../../constants';
import { checkAccess } from '../../utils';

export const PrivateContent = ({ children, serverError= null, access }) => {
	const userRole = useSelector(selectUserRole);

	const accessError = checkAccess(access, userRole) ? null : ERROR_MESAGE.ACCESS_DENIED;
	const error = serverError || accessError;

	return <>{error ? <Error error={error} /> : children}</>;
};
