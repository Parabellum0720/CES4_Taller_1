/* eslint-disable react/prop-types */

import { useEffect, useState } from 'react';
import { UserContext } from './UserContext';

const UserProvider = ({ children }) => {
	const [registeredUsers, setRegisteredUsers] = useState([
		{
			email: 'admin@gmail.com',
			password: 'admin',
		},
		{
			email: 'admin2@gmail.com',
			password: 'admin2',
		},
	]);

	useEffect(() => {
		console.log('registeredUsers', registeredUsers);
	}, [registeredUsers]);

	const [user, setUser] = useState({
		email: '',
		password: '',
	});

	const [isLogin, setIsLogin] = useState(false);
	return (
		<UserContext.Provider
			value={{
				user,
				setUser,
				setRegisteredUsers,
				registeredUsers,
				setIsLogin,
				isLogin,
			}}
		>
			{children}
		</UserContext.Provider>
	);
};
export default UserProvider;
