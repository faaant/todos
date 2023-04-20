import styled from 'styled-components';

import { StyledButton } from '../../../common/components/buttons';
import { COLORS, FONTS, SCREEN_SIZES } from '../../../theme';

export const StyledDashboard = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 18.75rem;
  gap: 2.5rem;
  padding: 3.125rem;
  background-color: ${COLORS.darkBlue};
  overflow-x: auto;
  height: calc(100vh - 5rem);

  & > :last-child {
    margin-left: 1.25rem;
  }

  &::-webkit-scrollbar {
    height: 0.5rem;
  }

  &::-webkit-scrollbar-track {
    background: ${COLORS.darkBlue};
  }

  &::-webkit-scrollbar-thumb {
    background: ${COLORS.darkSilver};
    border-radius: 1rem;
    width: 0.15rem;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: ${COLORS.darkGrey};
  }

  @media (max-width: ${SCREEN_SIZES.mobile}) {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2.5rem 2.375rem;
    height: calc(100vh - 5rem);
    overflow: auto;
    gap: 1.875rem;
    & > :last-child {
      margin-left: 0;
    }
  }
`;

export const StyledAddColumnButton = styled(StyledButton)`
  min-height: 3.4375rem;
  height: 3.4375rem;
  width: 100%;
  border-radius: 0;
  font-size: ${FONTS.SIZES.l};

  @media (max-width: ${SCREEN_SIZES.mobile}) {
    margin-bottom: 1.25rem;
    order: -1;
  }
`;
