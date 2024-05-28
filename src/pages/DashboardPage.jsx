import { Link, Outlet } from 'react-router-dom';

const DashboardPage = () => {
	return (
		<div>
			<h2>Dashboard</h2>
			<br />
			<Link to='indicadores'>Indicadores</Link>
			<br />
			<Link to='metricas'>Metricas</Link>
			<br />
			<Outlet />
		</div>
	);
};
export default DashboardPage;
