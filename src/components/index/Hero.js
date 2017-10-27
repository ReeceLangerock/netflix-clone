import React from 'react'
import styled from 'styled-components'
import sg from './../../styleguide.js'

import bg from './../../assets/bg.jpg'

const HeroImg = styled.img`
width: 100vw;

`

export default class Hero extends React.Component {
  componentWillMount () {}
  render () {
    return <HeroImg src={bg} />
  }
}
