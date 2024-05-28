import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DashboardPage from './pages/DashboardPage';
import UsersPage from './pages/UsersPage';
import UserPage from './pages/UserPage';
import NotFound from './pages/NotFound';
import Menu from './components/Menu';
import UserProvider from './context/UserProvider';

const App = () => {
	return (
		<>
			<BrowserRouter>
				<UserProvider>
					<Menu />
					<Routes>
						<Route path='/' element={<HomePage />} />
						<Route path='/dashboard/*' element={<DashboardPage />}>
							<Route path='indicadores' element={<p>Indicadores</p>} />
							<Route path='metricas' element={<p>Metricas</p>} />
						</Route>
						<Route path='/users' element={<UsersPage />} />
						<Route path='/user/:id' element={<UserPage />} />
						<Route path='/*' element={<NotFound />} />
					</Routes>
				</UserProvider>
			</BrowserRouter>
		</>
	);
};

export default App;
