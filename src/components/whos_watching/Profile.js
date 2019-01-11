import PropTypes from 'prop-types';
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
border: .3em solid rgba(0,0,0,.4);
box-sizing: border-box;
position: relative;
text-decoration: none;
background-image: url(${props => (props.img ? require('./../../assets/' + props.img) : 'none')});
background-repeat: no-repeat;
background-size: contain;
background-color: ${props => (props.img ? '#333' : '')};
border: ${props => (props.img ? '.3em solid rgba(0,0,0,.4)' : 'none')};

display: flex;
justify-content: center;
align-items: center;
i{font-size: 6vw;
}

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
      ${Avatar}  {
        background-color: #e5e5e5;
        border-color: #e5e5e5;
        
        i {
          color: grey;
        }
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
    return (
      <Container>
        <Avatar img={this.props.img}>
          {!this.props.img && <i className={`fa fa-plus-circle`} aria-hidden='true' />}
        </Avatar>
        <Name>{this.props.userName}</Name>

      </Container>
    )
  }
}

Profile.propTypes = {
  userName: PropTypes.string.isRequired,
  img: PropTypes.string
};