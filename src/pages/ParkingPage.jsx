import { useContext } from 'react';
import ParkingForm from '../components/ParkingForm';
import VehicleSelection from '../components/VehicleSelection';
import { ParkingContext } from '../context/ParkingContext';

const ParkingPage = () => {
	const { vehicleType } = useContext(ParkingContext);
	return (
		<section
			style={{ height: '100vh' }}
			className='d-flex justify-content-center align-items-center'
		>
			{vehicleType !== '' ? <ParkingForm /> : <VehicleSelection />}
		</section>
	);
};

export default ParkingPage;
