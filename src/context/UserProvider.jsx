/* eslint-disable react/prop-types */

import { useState } from 'react';
import { UserContext } from './UserContext';

const UserProvider = ({ children }) => {
	const successUser = {
		email: 'admin@gmail.com',
		password: 'admin',
	};
	const [user, setUser] = useState({
		email: '',
		password: '',
	});
	const [isLogin, setIsLogin] = useState(true);
	return (
		<UserContext.Provider
			value={{ user, setUser, successUser, setIsLogin, isLogin }}
		>
			{children}
		</UserContext.Provider>
	);
};
export default UserProvider;
