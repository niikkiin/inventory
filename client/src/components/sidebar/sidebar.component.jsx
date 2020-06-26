import React from 'react';

import { Container } from './sidebar.styles';

import { Route, Link } from 'react-router-dom'

export const Sidebar = () => {
	return (
		<Container>
			<ul className='list'>
				<ListItemLink activeOnlyWhenExact={true} to='/dashboard'>
					Dashboard
				</ListItemLink>
				<ListItemLink activeOnlyWhenExact={true} to='/items'>
					Items
				</ListItemLink>
			</ul>
		</Container>
	);
};

const ListItemLink = ({ to, activeOnlyWhenExact, children }) => {
	return (
		<Route
			path={to}
			exact={activeOnlyWhenExact}
			children={({ match }) => (
				<li className={match ? 'list-item active' : 'list-item'}>
					<Link className='link-list' to={to}>{children}</Link>
				</li>
			)}
		/>
	);
};
