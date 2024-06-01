import { useContext, useEffect } from 'react';
import { ParkingContext } from '../context/ParkingContext';

const ParkingForm = () => {
	const { form, setForm, vehicleType } = useContext(ParkingContext);

	const onChangeValue = e => {
		const { name, value } = e.target;
		setForm({
			...form,
			[name]: value,
		});
	};

	const submitInfo = e => {
		e.preventDefault();
		setForm({
			plateNumber: '',
			cc: '',
			model: '',
			brand: '',
		});
	};

	useEffect(() => {
		console.log('vehicleType', vehicleType);
	}, []);

	return (
		<div>
			<form
				style={{ width: '50vw' }}
				className=''
				onSubmit={e => submitInfo(e)}
			>
				<div className='mb-3'>
					<label className='form-label'>Número de placa:</label>
					<div className='input-group'>
						<input
							className='form-control'
							value={form.plateNumber}
							type='text'
							name='plateNumber'
							onChange={e => onChangeValue(e)}
						/>
					</div>
				</div>
				{vehicleType === 'byke' && (
					<div className='mb-3'>
						<label className='form-label'>Cilindraje de la motocicleta</label>
						<div className='input-group'>
							<input
								className='form-control'
								value={form.cc}
								type='text'
								name='cc'
								onChange={e => onChangeValue(e)}
							/>
						</div>
					</div>
				)}
				{vehicleType === 'car' && (
					<div className='mb-3'>
						<label className='form-label'>Modelo del vehiculo</label>
						<div className='input-group'>
							<input
								className='form-control'
								value={form.model}
								type='text'
								name='model'
								onChange={e => onChangeValue(e)}
							/>
						</div>
					</div>
				)}
				<div className='mb-3'>
					<label className='form-label'>Marca del vehiculo</label>
					<div className='input-group'>
						<input
							className='form-control'
							value={form.brand}
							type='text'
							name='brand'
							onChange={e => onChangeValue(e)}
						/>
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
