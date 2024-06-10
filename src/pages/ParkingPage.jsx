import { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ParkingContext } from '../context/ParkingContext';
import ParkingLot from '../components/ParkingLot';

const ParkingPage = () => {
	const { cells } = useContext(ParkingContext);

	return (
		<section
			style={{ height: '80vh' }}
			className='d-flex flex-column justify-content-center align-items-center'
		>
			<ParkingLot cells={cells} />
			<div
				style={{ width: '100vw', marginTop: '2rem' }}
				className='d-flex justify-content-center'
			>
				<Link className='btn btn-success' to='/vehicle'>
					Ingreso de vehiculo
				</Link>
			</div>
		</section>
	);
};

export default ParkingPage;
