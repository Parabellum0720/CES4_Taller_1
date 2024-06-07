import { useContext, useEffect, useState } from 'react';
import { ParkingContext } from '../context/ParkingContext';

const VehicleInput = ({ search = '', setSearch }) => {
	const { vehicles } = useContext(ParkingContext);

	useEffect(() => {
		if (search == '') {
			setLetters('');
			setNumbers('');
		}
	}, [search]);

	const [letters, setLetters] = useState('');
	const [numbers, setNumbers] = useState('');

	useEffect(() => {
		setLetters('');
		setNumbers('');
	}, [vehicles]);

	useEffect(() => {
		setSearch(letters + numbers);
	}, [letters, numbers]);

	const handleLettersChange = e => {
		const value = e.target.value.toUpperCase();
		if (/^[A-Z]*$/.test(value) && value.length <= 3) {
			setLetters(value);
		}
	};

	const handleNumbersChange = e => {
		const value = e.target.value.toUpperCase();
		// Permitir que el usuario borre el contenido
		if (value == '' || /^\d{0,2}[A-H]?$|^\d{0,3}$/.test(value)) {
			setNumbers(value);
		}
	};
	return (
		<div className='license-plate-input'>
			<input
				type='text'
				value={letters}
				onChange={handleLettersChange}
				className='letters-input'
				placeholder='ABC'
				maxLength='3'
			/>
			<span className='separator'>-</span>
			<input
				type='text'
				value={numbers}
				onChange={handleNumbersChange}
				className='numbers-input'
				placeholder='123'
				maxLength='3'
			/>
		</div>
	);
};

export default VehicleInput;
