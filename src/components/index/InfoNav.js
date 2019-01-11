import React from 'react'
import styled from 'styled-components'
import sg from './../../styleguide.js'

import bg from './../../assets/bg.jpg'
import InfoNavItem from './InfoNavItem'
const NavContainer = styled.nav`
margin-top: 0;
position: relative;
display: flex;
justify-content: center;
margin: 0 auto;
padding-top: 15px;
background-color: #141414;
border-bottom: 2px solid #3d3d3d;
border-right: none;
`



export default class InfoNav extends React.Component {
  componentWillMount () {}
  render () {
    return <NavContainer>
      <InfoNavItem navText ="No commitments \n Cancel online at anytime"/>
      <InfoNavItem navText ="Watch anywhere"/>
      <InfoNavItem navText ="Pick your price"/>

      </NavContainer>
  }
}
