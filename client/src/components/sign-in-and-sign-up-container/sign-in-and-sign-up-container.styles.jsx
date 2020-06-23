import styled from 'styled-components';

import { helpers, displayRowCenter } from 'utilities/styles/helpers.styles';

const { mainColor, mainTint, secondaryColor, boxShadow } = helpers;

export const SignInAndSignUpWrapper = styled.div`
  background-color: ${mainTint};
  position:fixed;
  top:0px;
  left:0px;
  width:100%;
  height:100%;
  
  ${displayRowCenter};

  .form {
    width: 80%;
  }
`;
  
export const Content = styled.div`
  background-color: ${secondaryColor};
  height: 80vh;
  width: 45vw;
  -webkit-box-shadow: ${boxShadow};
  -moz-box-shadow: ${boxShadow};
  box-shadow: ${boxShadow};

  padding: 2rem 2rem 5rem 5rem;
`;

export const Intro = styled.div`
  background-color: ${mainColor};
  height: 80vh;
  width: 35vw;
  -webkit-box-shadow: ${boxShadow};
  -moz-box-shadow: ${boxShadow};
  box-shadow: ${boxShadow};

  font-size: 9rem;
  font-weight: bold;
  padding: 8rem;
  color: ${mainTint};
  
  .store-name {
    color: ${secondaryColor};
  }
`;