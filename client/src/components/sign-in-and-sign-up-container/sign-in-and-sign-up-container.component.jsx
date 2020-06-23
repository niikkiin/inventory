import React from 'react';

// styled components
import {
  SignInAndSignUpWrapper,
  Content,
  Intro
} from './sign-in-and-sign-up-container.styles'

export const SignInAndSignUpContainer = ({children, welcomeText, storeName}) => (
  <SignInAndSignUpWrapper>
    <Intro>
      {welcomeText}
      <div className='store-name'>
        {storeName}
      </div>
    </Intro>
    <Content>
      {children}
    </Content>
  </SignInAndSignUpWrapper>
);