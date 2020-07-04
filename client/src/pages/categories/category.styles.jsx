import styled, {css} from 'styled-components';

const categoryStyles = color => {
  return color.color;
}

export const CategoryType = styled.div`
  background-color: ${categoryStyles};
  font-size: 2rem;
  padding: 2rem;
  margin: 2rem 0;
  border-radius: 1rem;
  display: inline-block;
`;