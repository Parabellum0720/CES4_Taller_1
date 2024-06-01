import {
	BrowserRouter,
	Routes,
	Route,
	Navigate,
	useNavigate,
} from 'react-router-dom';
import UsersPage from './pages/UsersPage';
import NotFound from './pages/NotFound';
import LoginPage from './pages/LoginPage';
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
						<Routes>
							<Route
								path='/'
								element={isLogin ? <ParkingPage /> : <Navigate to='/login' />}
							/>
							<Route path='/login' element={<LoginPage />} />
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
