/* eslint-disable react/prop-types */

import { useState } from 'react';
import { ParkingContext } from './ParkingContext';

const ParkingProvider = ({ children }) => {
	const [form, setForm] = useState({
		plate: '',
		document: null,
		cc: '',
		model: '',
		brand: '',
	});
	const [plate, setPlate] = useState('ASD123');
	const [vehicleType, setVehicleType] = useState('');
	const cellsLength = 24;
	// Inicializa el estado con un arreglo de longitud `cellsLength`, lleno de `false` (celdas vacías).
	const [cells, setCells] = useState(Array(cellsLength).fill(false));
	const [cellsDetails, setCellsDetails] = useState(
		Array(cellsLength).fill({ plate: '' }),
	);
	const [vehicles, setVehicles] = useState([
		{
			plate: 'ASD123',
			document: 101,
			cc: '200CC',
			model: '',
			brand: 'PULSAR',
		},
	]);

	const onChangeCells = index => {
		setCells(cells.map((cell, i) => (i === index ? !cell : cell)));
	};

	const addVehicleToCell = index => {
		const vehicle = vehicles.find(v => v.plate === plate);
		setCellsDetails(
			cellsDetails.map((detail, i) => (i === index ? vehicle : detail)),
		);
	};

	return (
		<ParkingContext.Provider
			value={{
				form,
				setForm,
				vehicleType,
				setVehicleType,
				cells,
				setCells,
				cellsDetails,
				setCellsDetails,
				setVehicles,
				vehicles,
				onChangeCells,
				plate,
				setPlate,
				addVehicleToCell,
			}}
		>
			{children}
		</ParkingContext.Provider>
	);
};
export default ParkingProvider;
