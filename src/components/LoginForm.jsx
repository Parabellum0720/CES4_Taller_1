import { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';
const LoginForm = () => {
	const { user, setUser, successUser, setIsLogin } = useContext(UserContext);
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
		if (
			user.email === successUser.email &&
			user.password === successUser.password
		) {
			setIsLogin(true);
			navigate('/');
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
							type='password'
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
