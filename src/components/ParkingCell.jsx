import { useContext, useEffect, useState } from 'react';
import cell from '../assets/cell.svg';
import vehicle from '../assets/vehicle.svg';
import motorcycle from '../assets/motorcycle.svg';
import { useNavigate } from 'react-router-dom';
import { ParkingContext } from '../context/ParkingContext';

const ParkingCell = ({ index, hasVehicle }) => {
	const navigate = useNavigate();
	const { onChangeCells, plate, addVehicleToCell, cellsDetails } =
		useContext(ParkingContext);
	const [isBike, setIsBike] = useState(false);

	useEffect(() => {
		setIsBike(cellsDetails[index].cc ? true : false);
	}, [cellsDetails]);

	const onSubmit = () => {
		if (hasVehicle) {
			navigate(`/vehicle/${cellsDetails[index].plate}`);
		} else if (!hasVehicle) {
			if (plate) {
				const plateExists = cellsDetails.filter(cell => cell.plate == plate);
				if (plateExists.lenght == 1) {
					onChangeCells(index);
					addVehicleToCell(index);
				} else {
					alert('No puedes añadir un vehiculo que ya se encuetra parqueado');
				}
			} else {
				console.log('No pasa nada, que buscas?');
			}
		}
	};

	return (
		<div
			onClick={onSubmit}
			style={{ cursor: plate !== '' ? 'pointer' : 'auto' }}
			className='parking-cell'
		>
			<img src={cell} alt='Parking Cell' className='cell' />
			{hasVehicle && !isBike ? (
				<img src={vehicle} alt='Vehicle' className='vehicle' />
			) : null}
			{isBike && <img src={motorcycle} alt='motorcycle' className='vehicle' />}
		</div>
	);
};

export default ParkingCell;
