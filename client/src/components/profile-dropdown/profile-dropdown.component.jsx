import React from 'react';

import { Container } from './profile-dropdown.styles';

// icons
import { Icon } from '@iconify/react';
import bxsDownArrow from '@iconify/icons-bx/bxs-down-arrow';

// redux
import { connect } from 'react-redux';
import { logout } from 'store/actions/auth.actions';

// proptypes
import PropTypes from 'prop-types';

// router
import { Link } from 'react-router-dom';

const ProfileDropDown = ({ logout }) => {
	return (
		<Container>
			<div className='half'>
				<label for='profile2' className='profile-dropdown'>
					<input type='checkbox' id='profile2' />
					<img alt='Profile' src='https://cdn0.iconfinder.com/data/icons/avatars-3/512/avatar_hipster_guy-512.png' />
					<span>Nikki Abarca</span>
					<label for='profile2'>
						<Icon icon={bxsDownArrow} className='icon' />
					</label>
					<ul>
						<li>
							<a href='#!'>
								<i className='mdi mdi-email-outline'></i>Messages
							</a>
						</li>
						<li>
							<Link to='/edit-profile'>
								Edit Profile
							</Link>
						</li>
						<li>
							<a href='#!'>
								<i className='mdi mdi-settings'></i>Settings
							</a>
						</li>
						<li>
							<Link to='/' onClick={logout}>
								<i className='mdi mdi-logout'></i>Logout
							</Link>
						</li>
					</ul>
				</label>
			</div>
		</Container>
	);
};

ProfileDropDown.propTypes = {
	logout: PropTypes.func.isRequired,
};

export default connect(null, { logout })(ProfileDropDown);
