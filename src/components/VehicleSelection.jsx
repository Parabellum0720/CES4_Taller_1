import { useContext, useState } from 'react';
import { ParkingContext } from '../context/ParkingContext';
import { useNavigate } from 'react-router-dom';
import VehicleInput from './VehicleInput';
import { UserContext } from '../context/UserContext';

const VehicleSelection = () => {
	const navigate = useNavigate();
	const { registeredUsers } = useContext(UserContext);
	const { setVehicleType, vehicles, setPlate } = useContext(ParkingContext);
	const [search, setSearch] = useState('');
	const [document, setDocument] = useState('');

	const onSearch = typeSearch => {
		if (typeSearch == 'document') {
			if (document) {
				const documentExists = registeredUsers.filter(
					user => user.document == parseInt(document),
				);
				if (documentExists.length == 1) {
					navigate(`/user/${documentExists[0].document}`);
				} else if (documentExists.length == 0) {
					alert(`El documento ${document} ingresado no existe`);
				}
			}
		} else if (typeSearch == 'plate') {
			const isFound = vehicles.filter(vehicle => vehicle.plate == search);
			if (isFound.length == 1) {
				setPlate(isFound[0].plate);
				navigate('/');
			} else if (isFound.length == 0) {
				if (search !== '') {
					alert(`${search} no esta registrado.`);
				} else {
					alert('Debes diligenciar la información');
				}
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
			<div className='d-flex'>
				<div
					style={{ marginTop: '2rem', marginRight: '2rem' }}
					className='d-flex flex-column align-items-center'
				>
					<label className='form-label'>Ingresa un documento</label>
					<div className='input-group'>
						<input
							style={{ height: '50px' }}
							className='form-control'
							value={document}
							type='number'
							name='document'
							autoComplete='off'
							onChange={e => {
								const { value } = e.target;
								setDocument(value);
							}}
						/>
					</div>
					<button
						onClick={() => onSearch('document')}
						style={{ marginTop: '1rem' }}
						className='btn btn-success'
					>
						Buscar
					</button>
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
						onClick={() => onSearch('plate')}
					>
						Buscar
					</button>
				</div>
			</div>
		</div>
	);
};

export default VehicleSelection;
