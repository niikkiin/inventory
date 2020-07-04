import styled from 'styled-components';

import { helpers } from 'utilities/styles/helpers.styles';

const {successColor, dangerColor, warningColor, secondaryColor } = helpers;

export const BadgeContainer = styled.div`
  padding: 1rem;
  text-transform: uppercase;
  border-radius: 1rem;
  font-weight: bold;
  font-size: 1.3rem;
  color: ${secondaryColor};

  display: flex;
  justify-content: center;
  min-width: 8.2rem;
  &.success {
    background-color: ${successColor};
  }
  &.warning {
    background-color: ${warningColor};
  }
  &.danger {
    background-color: ${dangerColor};
  }
`;