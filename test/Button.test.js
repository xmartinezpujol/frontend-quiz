import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, configure } from 'enzyme';
import 'jest-styled-components';
import Adapter from 'enzyme-adapter-react-16';

import Button from '../src/components/Shared/Button';
import COLOR_PALETTE from '../src/Constants';

configure({ adapter: new Adapter() });

describe('Button', () => {
  beforeEach(() => {});
  describe('Style', () => {
    it('renders correctly for default', () => {
      const tree = renderer.create(<Button>Text</Button>).toJSON();
      expect(tree).toHaveStyleRule('min-width', 'initial');
      expect(tree).toHaveStyleRule('border', '0');
      expect(tree).toHaveStyleRule('color', COLOR_PALETTE.nori);
      expect(tree).toMatchSnapshot();
    });
    it('fullWidth should be at min-width 100%', () => {
      const tree = renderer.create(<Button fullWidth>Text</Button>).toJSON();
      expect(tree).toHaveStyleRule('min-width', '100%');
    });
    it('has icon, should render icon font classes', () => {
      const wrapper = shallow(
        <Button
          iconWeight={700}
          iconSize={22}
          iconWidth={20}
          iFont="fa"
          icon="bomb"
        >
        Text
        </Button>);
      expect(wrapper.find('.fa').hasClass('fa-bomb'));
    });
  });
});
