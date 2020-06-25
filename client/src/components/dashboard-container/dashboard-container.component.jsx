import React from 'react';

// components
import { Header } from 'components/header/header.component';
import { Footer } from 'components/footer/footer.component';
import { Sidebar } from 'components/sidebar/sidebar.component';

import {
  Container, Main
} from './dashboard-container.styles';

export const DashboardContainer = ({children}) => (
  <Container>
  <Sidebar />
  <Header/>
  <Main>
    {children}
  </Main>
  <Footer />
</Container>
);
