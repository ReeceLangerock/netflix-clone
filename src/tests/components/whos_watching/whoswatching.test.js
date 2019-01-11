import React from 'react'
import ReactDOM from 'react-dom'
import { WhosWatching } from './../../../components/whos_watching/WhosWatching'

describe('WhosWatching', () => {
  let props

  beforeEach(() => {
    props = {
      location: {
        pathname: 'test'
      }
    }
  })

  it('renders without crashing', () => {
    shallow(<WhosWatching {...props} />)
  })

  // it('should render a <i> if no image prop', () => {
  //   const wrapper = mount(<Profile userName='name' />)
  //   expect(wrapper.find('div').find('i').length).toBe(1)
  // })

  // it('should not render a <i> image is included', () => {
  //   const wrapper = mount(<Profile userName='name' img='meeseeks.jpg' />)
  //   expect(wrapper.find('div').find('i').length).toBe(0)
  // })

  it('matches snapshot', () => {
    const wrapper = shallow(<WhosWatching {...props} />)
    expect(wrapper).toMatchSnapshot()
  })
})
