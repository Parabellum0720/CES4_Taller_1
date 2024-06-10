import React, { useContext, useEffect, useState } from 'react';
import { ParkingContext } from '../context/ParkingContext';
import { useNavigate } from 'react-router-dom';

const VehicleDetail = () => {
	const navigate = useNavigate();
	const { vehicles, setPlate, plate, cellsDetails } =
		useContext(ParkingContext);
	const [isParking, setIsParking] = useState(false);
	const [detail, setDetail] = useState({
		plate: '',
		document: null,
		cc: '',
		model: '',
		brand: '',
	});

	useEffect(() => {
		setDetail(vehicles.filter(v => v.plate === plate)[0]);
		setIsParking(
			cellsDetails.filter(c => c.plate === plate)[0] != undefined && true,
		);
	}, []);

	if (detail?.length == 0) {
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
					<span>{detail.plate?.slice(0, 3)}</span>-
					<span>{detail.plate?.slice(3)}</span>
				</div>
				<p>
					<strong>Documento:</strong> {detail.document}
				</p>
				<p>
					<strong>Marca: </strong>
					{detail.brand}
				</p>
				{detail.cc && (
					<p>
						<strong>CC:</strong> {detail.cc}
					</p>
				)}
				{detail.model && (
					<p>
						<strong>Modelo:</strong> {detail.model}
					</p>
				)}
			</div>

			<button
				className='btn btn-success'
				style={{ marginTop: '1rem' }}
				onClick={() => {
					!isParking && setPlate(detail.plate);
					!isParking && navigate('/');
					isParking && navigate('/vehicle');
				}}
			>
				{!isParking ? 'Parquear' : 'Volver'}
			</button>
		</section>
	);
};

export default VehicleDetail;
