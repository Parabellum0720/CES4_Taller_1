import { useContext, useEffect, useState } from 'react';
import { ParkingContext } from '../context/ParkingContext';
import { useNavigate, useParams } from 'react-router-dom';
import parking from '../assets/parking.svg';

const UserDetail = () => {
	const { id } = useParams();
	const navigate = useNavigate();
	const { vehicles, setPlate } = useContext(ParkingContext);
	const [owned, setOwned] = useState([]);

	useEffect(() => {
		const userVehicles = vehicles?.filter(
			vehicle => vehicle.document == parseInt(id),
		);
		setOwned(userVehicles);
	}, []);

	if (owned?.length == 0) {
		return (
			<section
				style={{ height: '85vh' }}
				className='d-flex flex-column justify-content-center align-items-center'
			>
				<div className='d-flex flex-column align-items-center'>
					<p>No hay detalles disponibles para este usuario.</p>
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
				<table className='table table-striped'>
					<thead>
						<tr>
							<th scope='col'>Placa</th>
							<th scope='col'>Marca</th>
							<th scope='col'>Documento</th>
							<th scope='col'>Cilindraje</th>
							<th scope='col'>Modelo</th>
							<th scope='col'>Acción</th>
						</tr>
					</thead>
					<tbody>
						{owned?.map((vehicle, index) => (
							<tr key={index}>
								<td>{vehicle.plate}</td>
								<td>{vehicle.brand}</td>
								<td>{vehicle.document}</td>
								{vehicle.cc ? <td>{vehicle.cc}</td> : <td>N/A</td>}
								{vehicle.model ? <td>{vehicle.model}</td> : <td>N/A</td>}
								<td>
									<img
										style={{ width: '1.5rem', cursor: 'pointer' }}
										onClick={() => {
											setPlate(vehicle.plate);
											navigate('/');
										}}
										src={parking}
										alt='parking'
									/>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</section>
	);
};

export default UserDetail;
