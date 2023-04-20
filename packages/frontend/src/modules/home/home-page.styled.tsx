import styled from 'styled-components';

import { COLORS } from '../theme';

export const StyledHomePage = styled.div`
  display: grid;
  grid-template-rows: 5rem calc(100vh - 5rem);
  height: 100vh;
  background-color: ${COLORS.darkBlue};
`;
