import React from 'react'
import styled from 'styled-components'
import sg from './../../styleguide.js'

import bg from './../../assets/bg.jpg'

const Message = styled.section`
color: white;
margin: 10px;
width: 33.3%;
// display: flex;
align-content: center;
justify-content: center;
text-align: center;

`

export default class InfoNavItem extends React.Component {
  componentWillMount () {}
  render () {
    return (
      <Message>
        {this.props.navText.split('\\n').map((item, key) => {
          return <span key={key}>{item}<br /></span>
        })}

      </Message>
    )
  }
}
