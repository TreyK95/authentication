import React, { useState } from 'react'
import { MARGIN } from '../styles'
import CardContainer from './CardContainer'
import Fade from './Fade'

const Card = (props) => {
  const {header, children} = props
  const [hideBody, setHideBody] = useState(true)
  return (
    <CardContainer>
      <header style={{marginBottom: MARGIN, display:'flex', justifyContent:'space-between'}}>
        <h3>{header}</h3>
        <p onClick={()=> {setHideBody(!hideBody)}}>{hideBody ? 'show ICON': 'hide ICON'}</p>
      </header>
      <Fade hide={hideBody}>
      {children}
      </Fade>
    </CardContainer>
  )
}

export default Card
