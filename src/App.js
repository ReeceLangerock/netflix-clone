import React from 'react'
import { Route, Switch } from 'react-router-dom'
import styled from 'styled-components'

import Index from './components/index/Index.js'
import WhosWatching from './components/whos_watching/WhosWatching.js'

import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import store, { history } from './redux/store/store'

class App extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Container>
            <Page>

              <main>
                <Switch>
                  <Route exact path='/' component={Index} />

                  <Route path="/who" component={WhosWatching} />
                </Switch>
              </main>
            </Page>
          </Container>
        </ConnectedRouter>
      </Provider>
    )
  }
}

export default App

const Page = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
max-width: 100vw;
margin: 0 auto;
min-height: 100vh;
position: relative;
`

const Container = styled.div`
  overflow: hidden;
  max-width: 100vw;


`
