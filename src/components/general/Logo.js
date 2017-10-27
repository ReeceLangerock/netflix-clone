import React from 'react'
import styled from 'styled-components'
import sg from './../../styleguide.js'

import logo from './../../assets/logo.svg'


const LogoSVG = styled.img`
height: 40px;


`

export default class Logo extends React.Component {
  componentWillMount () {}
  render () {
    return <LogoSVG src={logo} />
  }
}
