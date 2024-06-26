import VehicleSelection from '../components/VehicleSelection';

const VehiclePage = () => {
	return (
		<section
			style={{ height: '80vh' }}
			className='d-flex flex-column justify-content-center align-items-center'
		>
			<VehicleSelection />
		</section>
	);
};

export default VehiclePage;
