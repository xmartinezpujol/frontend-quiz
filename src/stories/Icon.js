import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, text, select, number } from '@storybook/addon-knobs';

import Icon from '../components/Icon';
import View from '../components/View';

const optionsColor = {
  black: 'black',
  yellow: 'yellow',
  blue: 'blue',
  red: 'red',
  temporary: 'temporary',
  negative: 'negative',
};

storiesOf('Icon', module)
  .addDecorator(withKnobs)
  .add('default', () => {
    const defaultColor = 'red';
    const label = 'Color';
    const color = select(label, optionsColor, defaultColor);

    return (
      <View
        style={{ width: '100vw', height: '100vh' }}
        container
        align="center"
        justify="center"
        direction="column"
      >
        <Icon
          font={text('Icon Font', 'fa')}
          name={text('Icon name (FA)', 'comment')}
          size={number('Icon fontSize', 30)}
          style={{ padding: '0px 17px' }}
          color={color}
        />
      </View>
    );
  });
