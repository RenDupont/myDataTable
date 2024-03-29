import React from 'react';

const DataTable = ({ data, columns }) => {
	
	return (
		<table>
			<thead>
				<tr>
					{columns.map((column) => (
						<th key={column.key}>{column.label}</th>
					))}
				</tr>
			</thead>
			<tbody>
				{data.map((item, index) => (
					<tr key={index}>
						{columns.map((column) => (
							<td key={column.key}>{item[column.key]}</td>
						))}
					</tr>
				))}
			</tbody>
		</table>
	);
};

export default DataTable;