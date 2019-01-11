import React from 'react'
import styled from 'styled-components'
import sg from './../../styleguide.js'

import bg from './../../assets/bg.jpg'

const HeroImg = styled.img`
box-sizing: border-box;
overflow: hidden;
color: #fff;
position: relative;
z-index: 0;
min-height: 0;
height: 94vh;
transition: height .2s linear;
min-width: 100vw;


`

const Background = styled.div`
background: #000;

:after {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 6vh;
  content:'';
  z-index: 1;
height: 94vh;
  
  background-image: -webkit-gradient(linear,left top,right top,color-stop(20%,rgba(0,0,0,.8)),color-stop(85%,rgba(0,0,0,0)));
}
`

export default class Hero extends React.Component {
  componentWillMount () {}
  render () {
    return <Background><HeroImg src={bg} /></Background>
  }
}
