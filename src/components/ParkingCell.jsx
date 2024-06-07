import { useContext, useEffect, useState } from 'react';
import cell from '../assets/cell.svg';
import vehicle from '../assets/vehicle.svg';
import motorcycle from '../assets/motorcycle.svg';
import { ParkingContext } from '../context/ParkingContext';

const ParkingCell = ({ index, hasVehicle }) => {
	const { onChangeCells, plate, addVehicleToCell, cellsDetails } =
		useContext(ParkingContext);
	const [isBike, setIsBike] = useState(false);

	useEffect(() => {
		setIsBike(cellsDetails[index].cc ? true : false);
	}, [cellsDetails]);

	const onSubmit = () => {
		if (!hasVehicle) {
			if (plate) {
				const plateExists = cellsDetails.filter(cell => cell.plate == plate);
				if (plateExists.length == 0) {
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
