import React from 'react'
import ReactDOM from 'react-dom'
import Profile from './../../../components/whos_watching/Profile'

describe('Profile', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Profile userName='name' />, div)
  })

  it('should receive a name prop', () => {
    const wrapper = mount(<Profile userName='name' />)
    expect(wrapper.prop('userName')).toEqual('name')
    // expect(component.prop('img')).toEqual('img.png')
  })
  it('should render a <i> if no image prop', () => {
    const wrapper = mount(<Profile userName='name' />)
    expect(wrapper.find('div').find('i').length).toBe(1)
  })

  it('should not render a <i> image is included', () => {
    const wrapper = mount(<Profile userName='name' img='meeseeks.jpg' />)
    expect(wrapper.find('div').find('i').length).toBe(0)
  })

  it('matches snapshot', () => {
    const wrapper = shallow(<Profile userName='name' />)
    expect(wrapper).toMatchSnapshot()
  })
})
