import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ParkingContext } from '../context/ParkingContext';
import ParkingLot from '../components/ParkingLot';

const ParkingPage = () => {
	const { cells } = useContext(ParkingContext);

	const [cellsCellsNumber, setCellsNumber] = useState({
		total: cells.length,
		avaiable: cells.filter(value => value === false).length,
		occupied: cells.filter(value => value === true).length,
	});

	useEffect(() => {
		setCellsNumber({
			total: cells.length,
			avaiable: cells.filter(value => value === false).length,
			occupied: cells.filter(value => value === true).length,
		});
	}, [cells]);

	return (
		<section
			style={{ height: '80vh' }}
			className='d-flex flex-column justify-content-center align-items-center'
		>
			<ParkingLot cells={cells} />
			<div style={{ width: '100vw' }} className='d-flex mx-5'>
				<div className='mx-5'>
					<p>Total celdas: {cellsCellsNumber.total}</p>
					<p>Total celdas ocupadas: {cellsCellsNumber.occupied}</p>
					<p>Total celdas disponibles: {cellsCellsNumber.avaiable}</p>
				</div>
				<Link
					style={{ height: '40px' }}
					className='btn btn-success'
					to='/vehicle'
				>
					Ingreso de vehiculo
				</Link>
			</div>
		</section>
	);
};

export default ParkingPage;
