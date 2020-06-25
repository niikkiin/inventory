import React from 'react';

// styled-components
import { HeaderContainer } from './header.styles';

// utilities
import { getCurrentDate } from 'utilities/date/date.component';

// components
import Profile from 'components/profile-dropdown/profile-dropdown.component';

export const Header = () => (
	<HeaderContainer>
		<div className='date'>{getCurrentDate()}</div>
		<Profile />
	</HeaderContainer>
);
