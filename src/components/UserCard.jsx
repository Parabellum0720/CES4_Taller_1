import { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import FaUser from '../assets/user-solid.svg';

const UserCard = () => {
	const { user, setUser, isLogin, setIsLogin } = useContext(UserContext);

	const logout = () => {
		setUser({
			document: 0,
			email: '',
			password: '',
		});
		setIsLogin(false);
	};

	return (
		<div style={{ height: '100%' }} className='d-flex justify-content-end'>
			{isLogin && (
				<div className='d-flex justify-content-center align-items-center p-4'>
					<div
						style={{
							width: '3rem',
							height: '3rem',
							borderRadius: '32px',
							marginRight: '1rem',
						}}
						className='d-flex justify-content-center align-items-center border border-black'
					>
						<img style={{ height: '2rem' }} src={FaUser} alt='user-solid.svg' />
					</div>
					<div className='d-flex flex-column'>
						<p className='m-0'>{user?.email.split('@')[0]}</p>
						<p
							onClick={logout}
							style={{ color: 'blue', cursor: 'pointer' }}
							className='text-decoration-underline m-0'
						>
							Salir
						</p>
					</div>
				</div>
			)}
		</div>
	);
};

export default UserCard;
