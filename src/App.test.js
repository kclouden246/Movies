import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import {shallow} from 'enzyme'

test("Check if movies appear in list", () => {
  const wrapper = shallow(<App />)
  expect(wrapper.find('li').length).toBeGreaterThan(0)
})

test("Check for connection to server", () => {
  const wrapper = shallow(<App />)

  expect(wrapper.state().movies.length).toBeGreaterThan(0)
})

