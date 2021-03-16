import styled from 'styled-components'
import { ALERT_BACKGROUND, ALERT_TEXT_COLOR, BORDER_RADIUS, NOTIFY_BACKGROUND, NOTIFY_TEXT_COLOR, PADDING, WARN_BACKGROUND, WARN_TEXT_COLOR } from '../styles'

const getTextColor = (props) =>{
  if(props.type === 'Alert'){
    return ALERT_TEXT_COLOR
  } else if(props.type === 'WARNING'){
    return WARN_TEXT_COLOR
  } else {
    return NOTIFY_TEXT_COLOR
  }
}

const getBackgroundColor = (props) =>{
  if(props.type === 'Alert'){
    return ALERT_BACKGROUND
  } else if(props.type === 'WARNING'){
    return WARN_BACKGROUND
  } else {
    return NOTIFY_BACKGROUND
  }
}

const FormattedMessage = styled.div`
  color: ${(props) => getTextColor(props)};
    border: 2px solid ${(props) => !props.noBackground ? getTextColor(props) : 'black'};
    background: ${(props) => ! props.noBackground ? getBackgroundColor(props) : 'black'};
    border-radius: ${BORDER_RADIUS};
    padding: ${ (props) => !props.noBackground ? PADDING: '0px'};`

    export default FormattedMessage 