import React from 'react';
import { shallow, configure } from 'enzyme';
import serializer, { toHaveStyleRule } from 'jest-glamor-react';
import Adapter from 'enzyme-adapter-react-16';

import Button from '../src/components/Button';

expect.addSnapshotSerializer(serializer);
expect.extend({ toHaveStyleRule });

configure({ adapter: new Adapter() });

describe('Button', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <Button theme="default">
        Button
      </Button>,
    );
  });
  it('renders correctly', () => {
    expect(wrapper.render()).toHaveStyleRule('min-width', 'initial');
    expect(wrapper.render()).toMatchSnapshot();
  });
  it('fullWidth Button should be at min-width 100%', () => {
    wrapper.setProps({ fullWidth: true });
    expect(wrapper.render()).toHaveStyleRule('min-width', '100%');
  });
  it('has no theme, should be default', () => {
    wrapper.setProps({ theme: false });
    expect(wrapper.render()).toHaveStyleRule('border', '0');
    expect(wrapper.render()).toHaveStyleRule('color', 'black');
  });
  it('has icon, should render icon font classes', () => {
    wrapper.setProps({
      theme: false,
      iconWeight: 700,
      iconSize: 22,
      iconWidth: 20,
      iFont: 'fa',
      icon: 'bomb',
    });
    expect(wrapper.find('.fa').hasClass('fa-bomb'));
  });
});
