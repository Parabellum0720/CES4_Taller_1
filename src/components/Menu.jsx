import { NavLink } from 'react-router-dom';
import style from './Menu.module.css';
const Menu = () => {
	return (
		<div>
			<ul>
				<li>
					<NavLink
						className={({ isActive }) => (isActive ? style.active : '')}
						to='/'
					>
						Home
					</NavLink>
				</li>
				<li>
					<NavLink
						className={({ isActive }) => (isActive ? style.active : '')}
						to='/dashboard'
					>
						Dashboard
					</NavLink>
				</li>
				<li>
					<NavLink
						className={({ isActive }) => (isActive ? style.active : '')}
						to='/users'
					>
						Users
					</NavLink>
				</li>
				<li>
					<NavLink
						className={({ isActive }) => (isActive ? style.active : '')}
						to='/user'
					>
						User
					</NavLink>
				</li>
			</ul>
		</div>
	);
};

export default Menu;
