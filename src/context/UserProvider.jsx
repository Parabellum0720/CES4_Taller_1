/* eslint-disable react/prop-types */

import { useState } from 'react';
import { UserContext } from './UserContext';

const UserProvider = ({ children }) => {
	const [registeredUsers, setRegisteredUsers] = useState([
		{
			document: 100,
			email: 'admin@gmail.com',
			password: 'admin',
		},
		{
			document: 101,
			email: 'admin2@gmail.com',
			password: 'admin2',
		},
	]);

	const [user, setUser] = useState({
		document: 0,
		email: '',
		password: '',
	});

	const [isLogin, setIsLogin] = useState(true);
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
