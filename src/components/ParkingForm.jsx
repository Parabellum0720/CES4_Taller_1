import { useContext, useEffect, useState } from 'react';
import { ParkingContext } from '../context/ParkingContext';
import { UserContext } from '../context/UserContext'; // Asegúrate de importar el contexto de usuario
import VehicleInput from './VehicleInput';
import { useNavigate } from 'react-router-dom';

const years = Array.from(new Array(30), (val, index) => 2023 - index);
const brands = ['Toyota', 'Honda', 'Ford', 'Chevrolet', 'Nissan'];
const bykeBrands = ['Bajaj', 'AKT', 'Auteco', 'Royal Enfield'];
const cylinder = ['100cc', '125cc', '150cc', '200cc', '+250cc'];
const ParkingForm = () => {
	const navigate = useNavigate();
	const {
		form,
		setForm,
		vehicleType,
		setVehicles,
		vehicles,
		setPlate,
		validatePlate,
		setVehicleType,
	} = useContext(ParkingContext);
	const { registeredUsers } = useContext(UserContext); // Obtener los usuarios registrados del contexto
	const [search, setSearch] = useState('');

	const brandSelect = vehicleType == 'car' ? brands : bykeBrands;

	useEffect(() => {
		setForm({
			...form,
			plate: search,
		});
	}, [search]);

	const onChangeValue = e => {
		const { name, value } = e.target;
		setForm({
			...form,
			[name]: value,
		});
	};

	const submitInfo = e => {
		e.preventDefault();

		if (!validatePlate(form.plate, vehicleType)) {
			alert('El formato de la placa no es válido.');
			return;
		}

		if (vehicleType == 'car') {
			if (
				form.plate == '' ||
				form.document == null ||
				form.model == '' ||
				form.brand == ''
			) {
				alert('¡Diligencia todos los datos!');

				return false;
			}
		} else if (vehicleType == 'bike') {
			if (
				form.plate == '' ||
				form.document == null ||
				form.cc == '' ||
				form.brand == ''
			) {
				alert('¡Diligencia todos los datos!');

				return false;
			}
		}

		const plateExists = vehicles?.filter(
			vehicle => vehicle.plate == form.plate,
		);
		console.log('plateExists', plateExists);
		const documentExists = registeredUsers.filter(
			user => user.document == parseInt(form.document),
		);
		if (plateExists?.length > 0) {
			alert('La placa ya existe. Por favor, ingrese una placa única.');
		} else if (plateExists?.length == 0 || plateExists == undefined) {
			if (documentExists.length == 1) {
				setVehicles([
					...vehicles,
					{
						plate: form.plate,
						document: parseInt(form.document),
						cc: form.cc,
						model: form.model,
						brand: form.brand,
					},
				]);
				const type = vehicleType == 'car' ? 'el vehiculo' : 'la moto';
				alert(`Se ha registrado con exito ${type} con placa ${form.plate}`);
				setVehicleType('');
				navigate('/vehicle');
			} else if (documentExists.length == 0) {
				alert('El documento ingresado no existe');
			}
		}
	};

	useEffect(() => {
		setPlate(form.plate);
		setForm({ plate: '', cc: '', model: '', brand: '', document: undefined }); // Clear the form
	}, [vehicles]);

	return (
		<div>
			<form
				style={{ width: '50vw' }}
				className=''
				onSubmit={e => submitInfo(e)}
			>
				<div className='mb-3'>
					<label className='form-label'>Número de placa:</label>
					<VehicleInput setSearch={setSearch} />
				</div>
				{vehicleType == 'bike' && (
					<div className='mb-3'>
						<label className='form-label'>Marca del vehículo</label>
						<div className='input-group'>
							<select
								className='form-select'
								value={form.cc}
								name='cc'
								onChange={e => onChangeValue(e)}
							>
								<option value=''>Seleccione una marca</option>
								{cylinder.map((cc, index) => (
									<option key={index} value={cc}>
										{cc}
									</option>
								))}
							</select>
						</div>
					</div>
				)}
				{vehicleType == 'car' && (
					<div className='mb-3'>
						<label className='form-label'>Modelo del vehículo</label>
						<div className='input-group'>
							<select
								className='form-select'
								value={form.model}
								name='model'
								onChange={e => onChangeValue(e)}
							>
								<option value=''>Seleccione un año</option>
								{years.map((year, index) => (
									<option key={index} value={year}>
										{year}
									</option>
								))}
							</select>
						</div>
					</div>
				)}
				<div className='mb-3'>
					<label className='form-label'>Marca del vehículo</label>
					<div className='input-group'>
						<select
							className='form-select'
							value={form.brand}
							name='brand'
							onChange={e => onChangeValue(e)}
						>
							<option value=''>Seleccione una marca</option>
							{brandSelect.map((brand, index) => (
								<option key={index} value={brand}>
									{brand}
								</option>
							))}
						</select>
					</div>
				</div>
				<div className='mb-3'>
					<label className='form-label'>Documento</label>
					<div className='input-group'>
						<input
							className='form-control'
							list='documents'
							value={form.document !== undefined ? form.document : ''}
							type='number'
							name='document'
							onChange={e => onChangeValue(e)}
						/>
						<datalist id='documents'>
							{registeredUsers.map((user, index) => (
								<option key={index} value={user.document} />
							))}
						</datalist>
					</div>
				</div>
				<div className='d-flex justify-content-end mt-3'>
					<button type='submit' className='btn btn-primary'>
						Enviar
					</button>
				</div>
			</form>
		</div>
	);
};

export default ParkingForm;
