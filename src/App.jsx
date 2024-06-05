import { BrowserRouter, Routes, Route, Navigate, Link } from 'react-router-dom';
import UserCard from './components/UserCard';
import UsersPage from './pages/UsersPage';
import NotFound from './pages/NotFound';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import ParkingPage from './pages/ParkingPage';
import { useContext } from 'react';
import ParkingProvider from './context/ParkingProvider';
import { UserContext } from './context/UserContext';

const App = () => {
	const { isLogin } = useContext(UserContext);

	return (
		<>
			<BrowserRouter>
				<main style={{ width: '100vw', height: '100vh' }}>
					<ParkingProvider>
						<nav
							className='d-flex justify-content-between align-items-center p-3'
							style={{ height: '10vh', width: '100vw' }}
						>
							<Link className='btn btn-success' to='/users'>
								Empleados
							</Link>
							<UserCard />
						</nav>

						<Routes>
							<Route
								path='/'
								element={isLogin ? <ParkingPage /> : <Navigate to='/login' />}
							/>
							<Route path='/login' element={<LoginPage />} />
							<Route path='/signup' element={<SignupPage />} />
							<Route path='/users' element={<UsersPage />} />
							<Route path='/*' element={<NotFound />} />
						</Routes>
					</ParkingProvider>
				</main>
			</BrowserRouter>
		</>
	);
};

export default App;
