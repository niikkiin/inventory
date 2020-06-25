import React from 'react';

import { Container } from './dashboard-content.styles';

// router
import { Link } from 'react-router-dom';

export const DashboardContent = ({ user, profile }) => {
	return (
		<Container>
			{profile !== null ? (
				<>has</>
			) : (
				<div className='set-up-profile'>
					<span>Please setup your profile.</span> <Link to='/create-profile'>Create Profile</Link>
				</div>
			)}
			<div class='main-header'>
				<div class='main-header__heading'>Hello {user}</div>
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
		</Container>
	);
};
