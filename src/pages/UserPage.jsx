import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

const UserPage = () => {
	const { id } = useParams();
	const { user, message } = useContext(UserContext);
	return (
		<div>
			<h2>User Id: {id}</h2>
			<p>{user.name}</p>
			<p>{message}</p>
		</div>
	);
};

export default UserPage;
