import React from 'react';
import ReactDOM from 'react-dom';
import App from './../App';

describe('Profile', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<App />, div)
  })

  it('matches snapshot', () => {
    const component = shallow(<App />)
    expect(component).toMatchSnapshot()
  })
})
