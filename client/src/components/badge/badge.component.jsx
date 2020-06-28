import React from 'react';

import {
  BadgeContainer
} from './badge.styles';


export const Badge = ({children, classes}) => (
  <BadgeContainer className={classes}>
    {children}
  </BadgeContainer>
)
