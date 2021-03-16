import styled from 'styled-components'
import { PRIMARY_COLOR, INV_TEXT_COLOR,FONT_SIZES, BORDER_RADIUS, PADDING } from '../styles'

const Button = styled.button`
  background: ${props => props.primary ? PRIMARY_COLOR : INV_TEXT_COLOR};
  color: ${props => props.primary ? INV_TEXT_COLOR : PRIMARY_COLOR};
  font-size: ${FONT_SIZES.MEDIUM};
  margin: 1em;
  padding: ${PADDING};
  border: 2px solid ${PRIMARY_COLOR};
  border-radius: ${BORDER_RADIUS};

  &:hover {
    background: ${props => props.primary ? INV_TEXT_COLOR : PRIMARY_COLOR };
    color: ${props => props.primary ? PRIMARY_COLOR : INV_TEXT_COLOR};
    cursor: pointer;
  }
`;

export default Button