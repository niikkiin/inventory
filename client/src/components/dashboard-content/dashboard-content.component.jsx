import React from 'react';

import { Container } from './dashboard-content.styles';

export const DashboardContent = () => {
	return (
		<Container>
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
		</Container>
	);
};
