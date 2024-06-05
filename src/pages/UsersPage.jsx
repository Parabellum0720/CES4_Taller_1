import UserTable from '../components/UserTable';

const UsersPage = () => {
	return (
		<section className='d-flex flex-column justify-content-center align-items-center'>
			<h1>Empleados registrado</h1>
			<UserTable />
		</section>
	);
};

export default UsersPage;
