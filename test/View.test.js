import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import View from '../src/components/View';

configure({ adapter: new Adapter() });

describe('View', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <View>
        {"I'm just some text inside a viewport"}
      </View>,
    );
  });
  it('View renders correctly', () => {
    expect(wrapper.render()).toMatchSnapshot();
  });
});
