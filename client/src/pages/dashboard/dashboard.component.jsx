import React from 'react';

import { Container, Sidebar, Main, Header, Footer } from './dashboard.styles';

const DashboardPage = () => {
	return (
		<Container>
			<Sidebar>
				<ul className='list'>
					<li className='list-item'>Dashboard</li>
					<li className='list-item'>Items</li>
				</ul>
			</Sidebar>
			<Header>
				<div className='date'>Date</div>
				<div className='profile'>Profile</div>
			</Header>
			<Main>
				<div class='main-header'>
					<div class='main-header__heading'>Hello User</div>
					<div class='main-header__updates'>Recent Items</div>
				</div>

				<div class='main-overview'>
					<div class='overviewcard'>
						<div class='overviewcard__icon'>Overview</div>
						<div class='overviewcard__info'>Card</div>
					</div>
					<div class='overviewcard'>
						<div class='overviewcard__icon'>Overview</div>
						<div class='overviewcard__info'>Card</div>
					</div>
					<div class='overviewcard'>
						<div class='overviewcard__icon'>Overview</div>
						<div class='overviewcard__info'>Card</div>
					</div>
					<div class='overviewcard'>
						<div class='overviewcard__icon'>Overview</div>
						<div class='overviewcard__info'>Card</div>
					</div>
				</div>

				<div class='main-cards'>
					<div class='card'>Card</div>
					<div class='card'>Card</div>
					<div class='card'>Card</div>
				</div>
			</Main>
			<Footer>
				<div className='copyright'>&copy; {new Date().getFullYear()}</div>
				<div className='signature'>Made with ❤ by Nikki</div>
			</Footer>
		</Container>
	);
};

export default DashboardPage;
