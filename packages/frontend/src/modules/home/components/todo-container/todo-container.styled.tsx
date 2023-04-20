import styled from 'styled-components';

import { StyledButton } from '../../../common/components/buttons';
import { CreationForm } from '../../../common/components/forms/creation-form';
import { COLORS, FONTS, SCREEN_SIZES } from '../../../theme';

export const StyledTodoContainer = styled.div`
  display: grid;
  overflow: hidden;
  height: fit-content;
  max-height: 100%;
  grid-template-rows: auto 1fr auto;
  padding: 0.9375rem 1.875rem;
  background-color: ${COLORS.lightGrey};

  @media (max-width: ${SCREEN_SIZES.mobile}) {
    overflow: unset;
    width: 100%;
  }
`;

export const StyledContainerHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  grid-template-rows: 1.8125rem;
  padding-bottom: 0.75rem;
  align-items: center;
`;

export const StyledItemsContainer = styled.div`
  overflow: auto;
  padding: 0;

  &::-webkit-scrollbar {
    width: 0.25rem;
  }

  &::-webkit-scrollbar-track {
    background: ${COLORS.lightSilver};
  }

  &::-webkit-scrollbar-thumb {
    background: ${COLORS.darkSilver};
    border-radius: 1rem;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: ${COLORS.darkGrey};
  }

  @media (max-width: ${SCREEN_SIZES.mobile}) {
    height: fit-content;
    max-height: 7.1875rem;
  }
`;

export const StyledAddCardButton = styled(StyledButton)`
  height: 1.8125rem;
  width: 11.25rem;
  font-size: ${FONTS.SIZES.l};
  margin-top: 0.75rem;
`;

export const StyledCreationForm = styled(CreationForm)`
  @media (max-width: ${SCREEN_SIZES.mobile}) {
    order: 1;
  }
`;
