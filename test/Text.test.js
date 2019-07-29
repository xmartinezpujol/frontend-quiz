import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Text from '../src/components/Text';

configure({ adapter: new Adapter() });

describe('Text', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <Text type="h1">
        {"I'm a title, trying to be descriptive!"}
      </Text>,
    );
  });
  it('h1 renders correctly', () => {
    wrapper.setProps({ type: 'h1' });
    expect(wrapper.render()).toMatchSnapshot();
  });
  it('h2 renders correctly', () => {
    wrapper.setProps({ type: 'h2' });
    expect(wrapper.render()).toMatchSnapshot();
  });
  it('h3 renders correctly', () => {
    wrapper.setProps({ type: 'h3' });
    expect(wrapper.render()).toMatchSnapshot();
  });
  it('h4 renders correctly', () => {
    wrapper.setProps({ type: 'h4' });
    expect(wrapper.render()).toMatchSnapshot();
  });
  it('h5 renders correctly', () => {
    wrapper.setProps({ type: 'h5' });
    expect(wrapper.render()).toMatchSnapshot();
  });
  it('p1 renders correctly', () => {
    wrapper.setProps({ type: 'p1' });
    expect(wrapper.render()).toMatchSnapshot();
  });
  it('p2 renders correctly', () => {
    wrapper.setProps({ type: 'p2' });
    expect(wrapper.render()).toMatchSnapshot();
  });
  it('p3 renders correctly', () => {
    wrapper.setProps({ type: 'p3' });
    expect(wrapper.render()).toMatchSnapshot();
  });
  it('p4 renders correctly', () => {
    wrapper.setProps({ type: 'p4' });
    expect(wrapper.render()).toMatchSnapshot();
  });
  it('p5 renders correctly', () => {
    wrapper.setProps({ type: 'p5' });
    expect(wrapper.render()).toMatchSnapshot();
  });
  it('span renders correctly', () => {
    wrapper.setProps({ type: 'span' });
    expect(wrapper.render()).toMatchSnapshot();
  });
});
