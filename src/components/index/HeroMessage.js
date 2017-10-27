import React from 'react'
import styled from 'styled-components'
import sg from './../../styleguide.js'

import bg from './../../assets/bg.jpg'

const Message = styled.section`
position: absolute;
left: 20px;
top: 30%;
color: white;
z-index: 100;

`

const SignUpButton = styled.button`
color: ${sg.buttonBig.color};
padding: ${sg.buttonBig.padding};
background-color: ${sg.buttonBig.backgroundColor};
border-radius: ${sg.buttonBig.borderRadius};
font-size  : ${sg.buttonBig.fontSize};
letter-spacing  : ${sg.buttonBig.letterSpacing};

line-height: normal;
font-weight: 400;
border:none;
:hover {
    background-color: ${sg.buttonBig.hover.backgroundColor};
       
}
`


export default class HeroMessage extends React.Component {
  componentWillMount () {}
  render () {
    return (<Message>
    
    <h1>See what's next.</h1>
    <h2>WATCH ANYWHERE. CANCEL ANYTIME</h2>
    <SignUpButton>JOIN FREE FOR A MONTH</SignUpButton>
      </Message>)
  }
}
