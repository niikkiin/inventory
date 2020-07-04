import React from 'react';

import {
  BadgeContainer
} from './badge.styles';


export const Badge = ({children, color, classes}) => {
  
  return (
    <BadgeContainer className={classes} 
          // style={{backgroundColor: {getColor(color)}}}
          style={color ? {backgroundColor:color} : {backgroundColor:'#A0A6BB'}}
    >
      {children}
    </BadgeContainer>
  );
}