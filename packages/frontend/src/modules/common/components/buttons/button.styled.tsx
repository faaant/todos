import styled from 'styled-components';

import { COLORS, FONTS } from '../../../theme';

interface IStylesFormButtonProps {
  color?: any;
  backgroundColor?: any;
  padding?: string;
  width?: string;
  height?: string;
}

export const StyledButton = styled.button<IStylesFormButtonProps>`
  height: ${(props) => props?.height || '100%'};
  width: ${(props) => props?.width || 'unset'};
  padding: ${(props) => props?.padding || '0'};
  background-color: ${(props) => props?.backgroundColor || 'transparent'};
  border: none;
  font-size: ${FONTS.SIZES.ms};
  line-height: 0.9rem;
  border-radius: 15px;
  color: ${(props) => props?.color || COLORS.darkGrey};

  &:hover {
    cursor: pointer;
  }
`;
