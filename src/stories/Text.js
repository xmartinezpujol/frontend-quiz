import React from 'react';

import { storiesOf } from '@storybook/react';

import Text from '../components/Text';
import View from '../components/View';

storiesOf('Texts', module)
  .add('local', () => (
    <View padding={50} type="rice" direction="column">
      <Text type="h1">H1 - Im a title, trying to be descriptive!</Text>
      <Text type="h2">H2 - Im a title, trying to be descriptive!</Text>
      <Text type="h3">H3 - Im a title, trying to be descriptive!</Text>
      <Text type="h4">H4 - Im a title, trying to be descriptive!</Text>
      <Text type="h5">H4 - Im a title, trying to be descriptive!</Text>
      <Text type="p1">P1 - Im a title, trying to be descriptive!</Text>
      <Text type="p2">P2 - Im a title, trying to be descriptive!</Text>
      <Text type="p3">P3 - Im a title, trying to be descriptive!</Text>
      <Text type="p4">P4 - Im a title, trying to be descriptive!</Text>
      <Text type="p5">P5 - Im a title, trying to be descriptive!</Text>
      <Text type="span">span - Im a title, trying to be descriptive!</Text>
    </View>
  ));
