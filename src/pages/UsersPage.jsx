import { Link } from 'react-router-dom';

const UsersPage = () => {
	return (
		<div>
			<h2>List Users</h2>
			<ul>
				<li>
					<Link to='/user/10'>User 10</Link>
				</li>
				<li>
					<Link to='/user/20'>User 20</Link>
				</li>
			</ul>
		</div>
	);
};

export default UsersPage;
