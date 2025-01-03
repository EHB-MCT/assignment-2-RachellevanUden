import React, { useEffect, useState } from "react";
import { getEncounters } from "../services/apiService";

const Encounters = () => {
	const [encounters, setEncounters] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const data = await getEncounters();
			console.log("Fetched data:", data);
			setEncounters(data);
		};

		fetchData();
	}, []);

	return (
		<div>
			<h1>Encounter Data</h1>
			<table>
				<thead>
					<tr>
						<th>Encounter ID</th>
						<th>Name</th>
						<th>Class Name</th>
						<th>Gear Score</th>
						<th>DPS</th>
						<th>Type</th>
					</tr>
				</thead>
				<tbody>
					{encounters.map((encounter, index) => (
						<tr key={index}>
							<td>{encounter.encounterId}</td>
							<td>{encounter.name}</td>
							<td>{encounter.className}</td>
							<td>{encounter.gearScore}</td>
							<td>{encounter.dps}</td>
							<td>{encounter.type}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default Encounters;
