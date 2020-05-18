import React from 'react';
import { render } from '@testing-library/react';
import {shallow} from 'enzyme'
import Movies from './Movies'

let wrapper;
beforeAll(() => {
  global.fetch = jest.fn(); // mocking `fetch()` API
});

beforeEach(() => {
  wrapper = shallow(<Movies />, { disableLifecycleMethods: true });
});

afterEach(() => {
  wrapper.unmount();
});

test("Check if movies appear in list", () => {
  const wrapper = shallow(<Movies/>)
  wrapper.instance().state({movies: [{title: "test movie"}]});
  expect(wrapper.find('li').length).toBeGreaterThan(0)
});

test("Get movies returns at least one movie", ()=>{
  const wrapper = shallow(<Movies/>);
  wrapper.instance().componentDidMount();
  console.log(wrapper.instance.state);
  expect(movieList.length).toBeGreaterThan(0);
});
