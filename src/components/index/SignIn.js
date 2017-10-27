import React from 'react'
import styled from 'styled-components'
import sg from './../../styleguide.js'
import { connect } from 'react-redux'

import * as actions from './../../redux/actions/actions'

const SignInButton = styled.button`
color: ${sg.button.color};
padding: ${sg.button.padding};
background-color: ${sg.button.backgroundColor};
border-radius: ${sg.button.borderRadius};
font-size  : ${sg.button.fontSize};
line-height: normal;
font-weight: 400;
border:none;
:hover {
    background-color: ${sg.button.hover.backgroundColor};
       
}
`

export class SignIn extends React.Component {
  componentWillMount () {}
  render () {
    return <SignInButton>Sign In</SignInButton>
  }
}
const mapStateToProps = state => ({})
export default connect(mapStateToProps, actions)(SignIn)
