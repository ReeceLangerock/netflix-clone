import React from 'react'
import styled from 'styled-components'
import sg from './../../styleguide.js'
import { connect } from 'react-redux'

import * as actions from './../../redux/actions/actions'

import Hero from './Hero'
import InfoNav from './InfoNav'
import SignIn from './SignIn'
import InfoDisplay from './InfoDisplay'
import Footer from './../general/Footer'
import TopBar from './../general/TopBar'

import HeroMessage from './HeroMessage'

const Container = styled.section`
background: #000;

  `

export class Index extends React.Component {
  componentWillMount () {}
  render () {
    let loc = this.props.location.pathname.split('/')[1]
    return (
      <Container>
        <TopBar location={loc} />

        <HeroMessage />

        {<Hero />}
        <InfoNav/>
        <InfoDisplay/>

        <Footer/>
      </Container>
    )
  }
}
const mapStateToProps = state => ({})
export default connect(mapStateToProps, actions)(Index)
