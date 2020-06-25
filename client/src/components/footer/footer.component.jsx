import React from 'react';

import {
  Container
} from './footer.styles';

export const Footer = () => (
	<Container>
		<div className='copyright'>&copy; {new Date().getFullYear()}</div>
		<div className='signature'>Made with ❤ by Nikki</div>
	</Container>
);
