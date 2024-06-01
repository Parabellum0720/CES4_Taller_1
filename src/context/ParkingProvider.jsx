/* eslint-disable react/prop-types */

import { useState } from 'react';
import { ParkingContext } from './ParkingContext';

const ParkingProvider = ({ children }) => {
	const [form, setForm] = useState([]);
	const [vehicleType, setVehicleType] = useState('');
	return (
		<ParkingContext.Provider
			value={{ form, setForm, vehicleType, setVehicleType }}
		>
			{children}
		</ParkingContext.Provider>
	);
};
export default ParkingProvider;
