import styled from 'styled-components';

import { COLORS, FONTS } from '../../../../../theme';
import { BlockTitle } from '../block-title';

export const StyledTodoItem = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  font-size: ${FONTS.SIZES.m};
  padding: 0.5rem 0.75rem;
  background-color: ${COLORS.grey};
  line-height: 1.21em;

  &:not(:last-child) {
    margin-bottom: 0.3125rem;
  }
`;

export const StyledTrashIcon = styled.img`
  height: 1rem;
`;

export const ItemTitle = styled(BlockTitle)`
  font-size: ${FONTS.SIZES.m};
`;
