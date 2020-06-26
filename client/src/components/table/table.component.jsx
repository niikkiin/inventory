import React from 'react';

import { TableContainer } from './table.styles';

export const Table = ({ headings, children }) => {
	return (
		<TableContainer>
			<thead>
				{headings.map((heading) => (
					<th>{heading}</th>
				))}
			</thead>
			<tbody>{children}</tbody>
		</TableContainer>
	);
};
