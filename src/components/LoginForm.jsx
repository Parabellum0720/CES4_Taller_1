import { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';

const LoginForm = ({ type }) => {
	const { user, setUser, registeredUsers, setRegisteredUsers, setIsLogin } =
		useContext(UserContext);
	const navigate = useNavigate();
	const onChangeValue = e => {
		const { name, value } = e.target;
		setUser({
			...user,
			[name]: value,
		});
	};

	const submitInfo = e => {
		e.preventDefault();
		let foundUser;
		if (type === 'login') {
			foundUser = registeredUsers.find(
				registeredUser =>
					registeredUser.email === user.email &&
					registeredUser.password === user.password,
			);
		} else if (type === 'signup') {
			foundUser = registeredUsers.find(
				registeredUser => registeredUser.email === user.email,
			);
		}

		console.log('foundUser', foundUser);
		if (type === 'login' && foundUser) {
			setIsLogin(true);
			navigate('/');
		} else if (type === 'login' && !foundUser) {
			setUser({
				email: '',
				password: '',
			});
			alert('Credenciales incorrectas!');
		} else if (type === 'signup' && !foundUser) {
			setRegisteredUsers([
				...registeredUsers,
				{
					email: user.email,
					password: user.password,
				},
			]);
			alert(`El email: ${user.email} ha sido registrado exitosamente.`);
			setIsLogin(true);
			navigate('/');
		} else if (type === 'signup' && foundUser) {
			alert('El usuario ya se encuentra registrado!');
			setUser({
				email: '',
				password: '',
			});
		}
	};

	return (
		<div>
			<form
				style={{ width: '50vw' }}
				className=''
				onSubmit={e => submitInfo(e)}
			>
				<div className='mb-3'>
					<label className='form-label'>Email</label>
					<div className='input-group'>
						<input
							className='form-control'
							value={user.email}
							type='email'
							name='email'
							onChange={e => onChangeValue(e)}
						/>
					</div>
				</div>
				<div className='mb-3'>
					<label className='form-label'>Contraseña</label>
					<div className='input-group'>
						<input
							className='form-control'
							value={user.password}
							type={type === 'login' ? 'password' : 'text'}
							name='password'
							onChange={e => onChangeValue(e)}
						/>
					</div>
				</div>
				<div className='d-flex justify-content-end mt-3'>
					<button type='submit' className='btn btn-primary'>
						Enviar
					</button>
				</div>
			</form>
		</div>
	);
};

export default LoginForm;
