import React, { useContext, useEffect, useState } from 'react';
import { ParkingContext } from '../context/ParkingContext';
import { useNavigate, useParams } from 'react-router-dom';

const VehicleDetail = () => {
	const navigate = useNavigate();
	const { plate } = useParams();
	const { vehicles, setPlate } = useContext(ParkingContext);
	const [vehicle, setVehicle] = useState(
		vehicles.filter(v => (v.plate = plate)),
	);

	useEffect(() => {
		plate && setVehicle(vehicles.filter(v => (v.plate = plate)));
	}, []);

	if (!vehicle) {
		return (
			<section
				style={{ height: '85vh' }}
				className='d-flex flex-column justify-content-center align-items-center'
			>
				<div className='d-flex flex-column align-items-center'>
					<p> No hay detalles disponibles para este vehículo.</p>
				</div>
			</section>
		);
	}

	return (
		<section
			style={{ height: '85vh' }}
			className='d-flex flex-column justify-content-center align-items-center'
		>
			<div className='d-flex flex-column align-items-center'>
				<h1>Detalles del vehículo</h1>
				<div style={{ marginBottom: '1rem' }} className='license-plate'>
					<span>{vehicle.plate.slice(0, 3)}</span>-
					<span>{vehicle.plate.slice(3)}</span>
				</div>
				<p>
					<strong>Documento:</strong> {vehicle.document}
				</p>
				<p>
					<strong>Marca: </strong>
					{vehicle.brand}
				</p>
				{vehicle.cc && (
					<p>
						<strong>CC:</strong> {vehicle.cc}
					</p>
				)}
				{vehicle.model && (
					<p>
						<strong>Modelo:</strong> {vehicle.model}
					</p>
				)}
			</div>
			<button
				className='btn btn-success'
				style={{ marginTop: '1rem' }}
				onClick={() => {
					setPlate(vehicle.plate);
					navigate('/');
				}}
			>
				Parquear
			</button>
		</section>
	);
};

export default VehicleDetail;