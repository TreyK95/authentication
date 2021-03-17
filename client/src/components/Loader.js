import React from 'react'
import { Dimmer, Loader as SemanticLoader, Image, Segment } from 'semantic-ui-react'
const Loader = ({inverted, content, size}) => {
    let _content = content ? content : "Loading"
    let _size = size ? size : "small"
    return (
    <Segment>
      <Dimmer active inverted={inverted}>
        <SemanticLoader  size={_size} content={_content} />
      </Dimmer>
      <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
    </Segment>
    )
}
export default Loader