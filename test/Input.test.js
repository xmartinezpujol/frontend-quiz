import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Input from '../src/components/Input';

configure({ adapter: new Adapter() });

describe('Input', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Input />);
  });
  it('renders correctly', () => {
    expect(wrapper.render()).toMatchSnapshot();
  });
});
