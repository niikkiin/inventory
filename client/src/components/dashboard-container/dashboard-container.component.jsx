import React from 'react';

import { Title } from './dashboard-container.styles';

// components
import { Header } from 'components/header/header.component';
import { Footer } from 'components/footer/footer.component';
import { Sidebar } from 'components/sidebar/sidebar.component';

import { Container, Main } from './dashboard-container.styles';

export const DashboardContainer = ({ children, title }) => (
	<Container>
		<Sidebar />
		<Header />
		<Main>
			<Title>{title}</Title>
			{children}
		</Main>
		<Footer />
	</Container>
);
