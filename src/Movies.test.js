import React from 'react';
import { render } from '@testing-library/react';
import {shallow} from 'enzyme'
import {Movies} from './Movies'

test("Check if movies appear in list", () => {
  const wrapper = shallow(<Movies />)
  expect(wrapper.find('li').length).toBeGreaterThan(0)
})

test("Check for connection to server", () => {
  const wrapper = shallow(<Movies />)

  expect(wrapper.state().movies.length).toBeGreaterThan(0)
})