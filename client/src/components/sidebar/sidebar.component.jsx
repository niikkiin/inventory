import React from 'react';

import {
  Container
} from './sidebar.styles';

export const Sidebar = () => {
	return (
		<Container>
			<ul className='list'>
				<li className='list-item'>Dashboard</li>
				<li className='list-item'>Items</li>
			</ul>
		</Container>
	);
};
