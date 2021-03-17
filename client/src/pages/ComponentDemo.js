import React from 'react'
import Button from '../components/Button'
import Card from '../components/Card'
import CardContainer from '../components/CardContainer'
import FormattedMessage from '../components/FormattedMessage'
import HookDemo from '../components/HookDemo'
import LoadDataDemo from '../components/LoadDataDemo'
import RegisterFormDemo from '../components/RegisterFormDemo'

const ComponentDemo = () => {
  return (
    <>
    <h1>My Components</h1>
    <Card header='Loading Data Demo'>
      <HookDemo />
      <LoadDataDemo/>
    </Card>
    <Card header='Buttons'>
    <Button primary>Primary Button</Button>
    <Button>My Button</Button>
    </Card>
    <Card header='Formatted Messages'>
        <FormattedMessage type='Alert'>
          Alert Message
        </FormattedMessage>
        <FormattedMessage type='WARNING'>
          WARNING Message
        </FormattedMessage>
        <FormattedMessage>
          Notify Message
        </FormattedMessage>
    </Card>
    <CardContainer>
      <h1>Hello World</h1>
    </CardContainer>
    <CardContainer>
      <h1>World</h1>
    </CardContainer>
    <Card header='Form Demo'>
      <RegisterFormDemo />      
    </Card>
    </>
  )
}

export default ComponentDemo