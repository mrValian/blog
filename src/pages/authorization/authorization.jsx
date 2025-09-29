import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { useDispatch, useStore, useSelector } from 'react-redux';
import { server } from '../../bff';
import { Input, Button, H2 } from '../../components';
import { setUser } from '../../action';
import { selectUserRole } from '../../selectors';
import { ROLE } from '../../constants';

const authFormScheme = yup.object().shape({
	login: yup
		.string()
		.required('Введите логин.')
		.matches(/^\w+$/, 'Неверно заполнен логин. Допускаються буквы и цифры.')
		.min(3, 'Неверно заполнен логин. Минимум 3 символа.')
		.max(15, 'Неверно заполнен логин. Максимум 15 символов.'),
	password: yup
		.string()
		.required('Введите пароль.')
		.matches(
			/^[\w#%]+$/,
			'Неверно заполнен пароль. Допускаються буквы, цыфры, решотка, процент',
		)
		.min(6, 'Неверно заполнен пароль. Минимум 6 символа.')
		.max(30, 'Неверно заполнен пароль. Максимум 30 символов.'),
});

const StyledLink = styled(Link)`
	text-align: center;
	text-decoration: underline;
	margin: 15px auto;
	font-size: 18px;
`;

const ErrorMessage = styled.div`
	background-color: #fcadad;
	padding: 10px;
	font-size: 18px;
	text-align: center;
`;

const AuthorizationContainer = ({ className }) => {
	const {
		register,
		reset,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues: {
			login: '',
			password: '',
		},
		resolver: yupResolver(authFormScheme),
	});

	const [serverError, setServerError] = useState(null);
	const dispatch = useDispatch();
	const store = useStore();
	const roleId = useSelector(selectUserRole);

	useEffect(() => {
		let currentWasLogout = store.getState().app.wasLogout;

		const unsubscribe = store.subscribe(() => {
			let prevWasLogout = currentWasLogout;
			currentWasLogout = store.getState().app.wasLogout;

			if (currentWasLogout !== prevWasLogout) {
				reset();
			}
		});

		return unsubscribe;
	}, [reset, store]);

	const onSbmit = ({ login, password }) => {
		// console.log(login, password);

		server.authorize(login, password).then(({ error, res }) => {
			if (error) {
				setServerError(`Ошибка запроса: ${error}`);
				return false;
			}
			// console.log(res);
			dispatch(setUser(res));
		});
	};

	const formError = errors?.login?.message || errors?.password?.message;
	const errorMassage = formError || serverError;

	if (roleId !== ROLE.GUEST) {
		return <Navigate to='/' />
	}

	return (
		<div className={className}>
			<H2>Авторизация</H2>
			<form action="#" onSubmit={handleSubmit(onSbmit)}>
				<Input
					type="text"
					placeholder="Логин"
					{...register('login', {
						onChange: () => setServerError(null),
					})}
				/>
				<Input
					type="password"
					placeholder="Пароль..."
					{...register('password', {
						onChange: () => setServerError(null),
					})}
				/>
				<Button type="submit" disabled={!!formError}>
					Авторизоваться
				</Button>
				<StyledLink to="/register">Зарегистрироваться</StyledLink>
				{errorMassage && <ErrorMessage>{errorMassage}</ErrorMessage>}
			</form>
		</div>
	);
};

export const Authorization = styled(AuthorizationContainer)`
	display: flex;
	align-items: center;
	flex-direction: column;

	& > form {
		display: flex;
		flex-direction: column;
		width: 300px;
	}
`;
