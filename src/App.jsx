import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UsersPage from './pages/UsersPage';
import NotFound from './pages/NotFound';
import Menu from './components/Menu';
import LoginPage from './pages/LoginPage';

const App = () => {
	return (
		<>
			<BrowserRouter>
				<Menu />
				<Routes>
					<Route path='/' element={<LoginPage />} />
					<Route path='/users' element={<UsersPage />} />
					<Route path='/*' element={<NotFound />} />
				</Routes>
			</BrowserRouter>
		</>
	);
};

export default App;
