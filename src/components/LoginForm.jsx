import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';

const LoginForm = () => {
	const { user, setUser, successUser } = useContext(UserContext);

	const onChangeValue = e => {
		const { name, value } = e.target;
		setUser({
			...user,
			[name]: value,
		});
	};

	const submitInfo = e => {
		e.preventDefault();
		if (
			user.email === successUser.email &&
			user.password === successUser.password
		) {
			alert('Inicio de sesión exitoso');
		} else {
			setUser({
				email: '',
				password: '',
			});
			alert('Credenciales incorrectas!');
		}
	};

	return (
		<div>
			<div>LoginForm</div>
			<form onSubmit={e => submitInfo(e)}>
				<input
					value={user.email}
					type='email'
					name='email'
					onChange={e => onChangeValue(e)}
				/>
				<input
					value={user.password}
					type='password'
					name='password'
					onChange={e => onChangeValue(e)}
				/>
				<button type='submit'>Enviar</button>
			</form>
		</div>
	);
};

export default LoginForm;
