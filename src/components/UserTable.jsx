import { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import { Link } from 'react-router-dom';
import vehicle from '../assets/vehicle.svg';

const UserTable = () => {
	const { registeredUsers } = useContext(UserContext);
	return (
		<section style={{ width: '50vw', height: '50vh' }}>
			<table className='table table-striped'>
				<thead>
					<tr>
						<th scope='col'>Documento</th>
						<th scope='col'>Correo</th>
					</tr>
				</thead>
				<tbody>
					{registeredUsers.map((user, index) => (
						<tr key={index}>
							<td>{user.document}</td>
							<td>{user.email}</td>
							<td>
								<Link className='btn' to={`/user/${user.document}`}>
									<img style={{ width: '2rem' }} src={vehicle} alt='car' />
								</Link>
							</td>
						</tr>
					))}
				</tbody>
			</table>
			<Link
				style={{ marginTop: '3rem', marginRight: '3rem' }}
				className='btn btn-success'
				to='/login'
			>
				Login
			</Link>
			<Link
				style={{ marginTop: '3rem' }}
				className='btn btn-success'
				to='/signup'
			>
				Registrar empleado
			</Link>
		</section>
	);
};

export default UserTable;
