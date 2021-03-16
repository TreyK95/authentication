import styled from 'styled-components'
import { INV_PRIMARY_COLOR, MARGIN, PADDING, BORDER_RADIUS, SHADOW} from '../styles'

const CardContainer = styled.div`
  background: ${INV_PRIMARY_COLOR};
  margin: ${MARGIN};
  padding: ${PADDING};
  border: 2px solid ${INV_PRIMARY_COLOR};
  border-radius: ${BORDER_RADIUS};
  box-shadow: ${SHADOW};
`;

export default CardContainer