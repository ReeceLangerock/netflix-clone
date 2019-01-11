import React from 'react'
import styled from 'styled-components'
import sg from './../../styleguide.js'

import logo from './../../assets/logo.svg'

const FooterContainer = styled.footer`
padding: 10px 0px;
z-index: 10;
height: 100%;
max-width: 1000px;
margin: 0 auto;
color: #999;

`

const FooterTop = styled.div`
padding: 0;
margin: 0 0 30px;
`

const List = styled.ul`
list-style: none;
margin-left: 0;
padding: 0;
margin-bottom: 0;
`

const ListItem = styled.li`
list-style: none;
margin-left: 0;
box-sizing: border-box;
padding: 0;
margin-bottom: 16px;
display: inline-block;
min-width: 100px;
width: 24%;
padding-right: 12px;
vertical-align: top;

a{
color: #999;
    text-decoration: none;
}

:hover{
    text-decoration: underline;
}
`

export default class Footer extends React.Component {
  componentWillMount () {}
  render () {
    return (
      <FooterContainer>
        <FooterTop>
          Questions? Call 1-866-579-7172
  
        </FooterTop>
        <List>

          <ListItem>
            <a href ='#'>FAQ</a>
          </ListItem>
          <ListItem>
          <a href ='#'>Help Center</a>
          </ListItem>

          <ListItem>
          <a href ='#'>Account</a>
          </ListItem>
          <ListItem>
          <a href ='#'>Media Center</a>
          </ListItem>

          <ListItem>
          <a href ='#'>Investor Relations</a>
          </ListItem>

          <ListItem>
          <a href ='#'>Jobs</a>
          </ListItem>

          <ListItem>
          <a href ='#'>Gift Cards</a>
          </ListItem>

          <ListItem>
          <a href ='#'>Ways to Watch</a>
          </ListItem>

          <ListItem>
          <a href ='#'>Terms of Use</a>
          </ListItem>

          <ListItem>
          <a href ='#'>Privacy</a>
          </ListItem>
          <ListItem>
          <a href ='#'>Cookie Preferences</a>
          </ListItem> <ListItem>
          <a href ='#'>Corporate Information</a>
          </ListItem>
          <ListItem>
          <a href ='#'>Contact Us</a>
          </ListItem>
          <ListItem>
          <a href ='#'>Speed Test</a>
          </ListItem>
          <ListItem>
          <a href ='#'>Netflix Originals</a>
          </ListItem>

        </List>

      </FooterContainer>
    )
  }
}
