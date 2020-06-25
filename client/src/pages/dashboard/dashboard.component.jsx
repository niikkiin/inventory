import React from 'react';

import { Container, Main } from './dashboard.styles';

// components
import { Header } from 'components/header/header.component';
import { DashboardContent } from 'components/dashboard-content/dashboard-content.component';
import { Footer } from 'components/footer/footer.component';
import { Sidebar } from 'components/sidebar/sidebar.component';

const DashboardPage = () => {
	return (
		<Container>
			<Sidebar />
			<Header />
			<Main>
        <DashboardContent />
			</Main>
			<Footer />
		</Container>
	);
};

export default DashboardPage;
