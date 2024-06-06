import { useContext, useState } from 'react';
import { ParkingContext } from '../context/ParkingContext';
import { useNavigate } from 'react-router-dom';
import VehicleInput from './VehicleInput';

const VehicleSelection = () => {
	const navigate = useNavigate();
	const { setVehicleType, vehicles, setPlate } = useContext(ParkingContext);
	const [search, setSearch] = useState('');

	const onSubmit = () => {
		const isFound = vehicles.find(vehicle => vehicle.plate === search);
		if (isFound) {
			setPlate(isFound.plate);
			navigate('/');
		} else if (!isFound) {
			if (search !== '') {
				alert(`${search} no esta registrado.`);
			} else {
				alert('Debes diligenciar la información');
			}
		}
	};

	return (
		<div
			style={{ width: '50vw' }}
			className='d-flex flex-column align-items-center'
		>
			<div className='d-flex flex-column align-items-center'>
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
						onClick={() => setVehicleType('bike')}
						className='btn btn-danger mx-2'
					>
						Moto
					</button>
				</div>
			</div>
			<div
				style={{ marginTop: '2rem' }}
				className='d-flex flex-column align-items-center'
			>
				<label className='form-label'>Ingresa una placa</label>
				<VehicleInput setSearch={setSearch} />
				<button
					style={{ marginTop: '1rem' }}
					className='btn btn-success'
					onClick={onSubmit}
				>
					Buscar
				</button>
			</div>
		</div>
	);
};

export default VehicleSelection;
