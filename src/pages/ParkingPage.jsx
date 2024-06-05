import { useContext, useEffect } from 'react';
import ParkingForm from '../components/ParkingForm';
import VehicleSelection from '../components/VehicleSelection';
import { ParkingContext } from '../context/ParkingContext';

const ParkingPage = () => {
	const { vehicleType, setVehicleType } = useContext(ParkingContext);

	useEffect(() => {
		setVehicleType('');
	}, []);

	return (
		<section
			style={{ height: '80vh' }}
			className='d-flex flex-column justify-content-center align-items-center'
		>
			{vehicleType !== '' ? <ParkingForm /> : <VehicleSelection />}
		</section>
	);
};

export default ParkingPage;
