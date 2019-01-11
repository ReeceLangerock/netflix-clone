import React from 'react'
import styled from 'styled-components'
import sg from './../../styleguide.js'
import { connect } from 'react-redux'

import * as actions from './../../redux/actions/actions'

import TopBar from './../general/TopBar'
import Profile from './Profile'

const Page = styled.section`
display: flex;
justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  content:'';
  z-index: 1;
  background: #141414;

  `

const Container = styled.div`
padding-top: 50px;
margin: 0 auto;
justify-content: center;
align-items: center;
display: flex;
flex-direction: column;
max-width: 80%;
text-align: center;
`

const ProfileContainer = styled.div`
display: flex;
margin: 2em 0;

`

const Title = styled.div`
width: 100%;
color: #fff;
font-size: 3.5vw;
`

const Button = styled.span`
display: block;
margin: 2em 0 1em 0;
font-size: 1.3vw;
color: grey;
border: 1px solid grey;
text-transform: uppercase;
padding: .5em 1.5em;
letter-spacing: 2px;
cursor: pointer;
font-size: .9em;


:hover {
  
  border-color: #e5e5e5;
  color: #e5e5e5;

  
}
`

export class WhosWatching extends React.Component {
  componentWillMount () {
   
    
  }
  render () {
    let loc = this.props.location.pathname.split('/')[1];
    return (
      <Page>
        <TopBar location = {loc}/>

        <Container>
          <Title>Who's Watching? </Title>

          <ProfileContainer>
            <Profile img='rick.jpg' userName='Rick' />
            <Profile img='morty.png' userName='Morty' />
            <Profile img='meeseeks.jpg' userName='Mr. Meeseeks' />
            <Profile userName='Add Profile' />

          </ProfileContainer>

          <Button>Manage Profiles</Button>
        </Container>

      </Page>
    )
  }
}
const mapStateToProps = state => ({})
export default connect(mapStateToProps, actions)(WhosWatching)
