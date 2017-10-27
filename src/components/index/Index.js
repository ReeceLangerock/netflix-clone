import React from 'react'
import styled from 'styled-components'
import sg from './../../styleguide.js'
import { connect } from 'react-redux'

import * as actions from './../../redux/actions/actions'

import Hero from './Hero'
import SignIn from './SignIn'
import Logo from './../general/Logo'

import HeroMessage from './HeroMessage'

const Container = styled.section`
background: #141414;
:before {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  content:'';
  z-index: 1;
  background-image: -webkit-gradient(linear,left top,right top,color-stop(20%,rgba(0,0,0,.8)),color-stop(85%,rgba(0,0,0,0)));
}
  `

const TopBar = styled.div`
box-sizing: border-box;
z-index: 100;
align-items: center;
display: flex;
justify-content: space-between;
position: absolute;
width: 100vw;
padding: 25px;
`

export class Index extends React.Component {
  componentWillMount () {}
  render () {
    return (
      <Container>
        <TopBar>
          <Logo />
          <SignIn />

        </TopBar>

        <HeroMessage />

        {<Hero />}
      </Container>
    )
  }
}
const mapStateToProps = state => ({})
export default connect(mapStateToProps, actions)(Index)
