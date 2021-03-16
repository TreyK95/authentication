import React from 'react'
import Button from '../components/Button'
import CardContainer from '../components/CardContainer'
import FormattedMessage from '../components/FormattedMessage'
import RegisterFormDemo from '../components/RegisterFormDemo'

const ComponentDemo = () => {
  return (
    <>
    <h1>My Components</h1>
    <Button primary>Primary Button</Button>
    <Button>My Button</Button>
    <CardContainer>
        <FormattedMessage type='Alert'>
          Alert Message
        </FormattedMessage>
        <FormattedMessage type='WARNING'>
          WARNING Message
        </FormattedMessage>
        <FormattedMessage>
          Notify Message
        </FormattedMessage>
    </CardContainer>
    <CardContainer>
      <h1>Hello World</h1>
    </CardContainer>
    <CardContainer>
      <h1>World</h1>
    </CardContainer>
    <CardContainer>
      <RegisterFormDemo />      
    </CardContainer>
    </>
  )
}

export default ComponentDemo