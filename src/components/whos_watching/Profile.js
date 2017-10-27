import React from 'react'
import styled from 'styled-components'
import sg from './../../styleguide.js'

import bg from './../../assets/rick.jpg'
import meeseeks from './../../assets/meeseeks.jpg'
// import morty from './../../assets/morty.png'


const Avatar = styled.div`
height: 10vw;
width: 10vw;
max-height: 200px;
max-width: 200px;
min-height: 84px;
min-width: 84px;
background: white;
border: .3em solid rgba(0,0,0,.4);
box-sizing: border-box;
position: relative;
text-decoration: none;
background-image: url(${props => require('./../../assets/'+props.img)});
background-repeat: no-repeat;
background-size: contain;
background-color: #333;


`

// ${props => 'url'+(require('./../../assets/' + props.userName.toLowerCase() + '.png'))};
const Container = styled.div`
margin: 0 2vw 0 0;
display: flex;
flex-direction: column;
align-content: center;
color: grey;
:last-child{
    margin: 0;
}


    :hover {
        color: #e5e5e5;
        
        ${Avatar}  {
        border-color: #e5e5e5;
        }

        
    }


`
const Name = styled.div`
line-height: 1.2em;
min-height: 2.4em;
display: block;
text-align: center;
font-size: 1.3vw;
margin: .8em 0;
text-overflow: ellipsis;
overflow: hidden;


`

export default class Profile extends React.Component {
  componentWillMount () {}
  render () {
    console.log(this.props.img)
    return (
      <Container>
        <Avatar img = {this.props.img || 'rick.jpg'}/>
        <Name>{this.props.userName}</Name>

      </Container>
    )
  }
}
