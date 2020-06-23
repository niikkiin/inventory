import styled from 'styled-components';
import { helpers } from 'utilities/styles/helpers.styles';

const { mainTint, secondaryColor, accentColor} = helpers;

export const CustomButtonContainer = styled.button`
  min-width: 10rem;
  width: auto;
  margin: 4rem auto  2rem auto;
  display: inline-block;
  height: 5rem;
  letter-spacing: 0.1rem;
  line-height: 5rem;
  padding: 0 3.5rem 0 3.5rem;
  font-size: 1.7rem;
  font-weight: 400;
  cursor: pointer;
  transition: all 0.3s ease;

  color: ${mainTint};
  border: 1px solid ${mainTint};
  background-color: transparent;
  border-radius: 1rem;
  
  &:hover {
    color: ${accentColor};
    border: 1px solid ${accentColor};
  }
  
  
  &.submit-btn {
    color: ${secondaryColor};
    background-color: ${accentColor};

    &:hover {
      background-color: transparent;
      color: ${accentColor};
    }
  }

`;