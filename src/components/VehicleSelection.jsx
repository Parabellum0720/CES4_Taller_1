import { useContext } from 'react';
import { ParkingContext } from '../context/ParkingContext';

const VehicleSelection = () => {
	const { setVehicleType } = useContext(ParkingContext);
	return (
		<div
			style={{ width: '50vw' }}
			className='d-flex flex-column align-items-center'
		>
			<h3>Seleccione su tipo de vehiculo:</h3>
			<div className='d-flex'>
				<button
					style={{ width: '150px' }}
					type='button'
					onClick={() => setVehicleType('car')}
					className='btn btn-success mx-2'
				>
					Carro
				</button>
				<button
					style={{ width: '150px' }}
					type='button'
					onClick={() => setVehicleType('byke')}
					className='btn btn-danger mx-2'
				>
					Moto
				</button>
			</div>
		</div>
	);
};

export default VehicleSelection;
