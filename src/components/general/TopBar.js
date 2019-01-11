import React from 'react'
import styled from 'styled-components'
import sg from './../../styleguide.js'

import Logo from './Logo'
import SignIn from './../index/SignIn'

const Container = styled.div`
box-sizing: border-box;
z-index: 100;
align-items: center;
display: flex;
justify-content: space-between;
position: absolute;
width: 100vw;
padding: 0 3%;
`

const LogoSVG = styled.img`
height: 2.5vw;
padding: 18px 0;
min-height: 16px;

`

export default class TopBar extends React.Component {
  componentWillMount () {}
  render () {
    return (
      <Container>
        <Logo />
        {this.props.location === '' && <SignIn />}

      </Container>
    )
  }
}
