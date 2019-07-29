import React from 'react';

import { storiesOf } from '@storybook/react';
import {
  withKnobs,
  text,
  number,
  select,
} from '@storybook/addon-knobs';

import View from '../components/View';

const optionsView = {
  transparent: 'transparent',

  // Primary
  red: 'red',
  red_light: 'red_light',
  blue: 'blue',
  blue_light: 'blue_light',
  background_text: 'background_text',
  text: 'text',
  text2: 'text2',
  title: 'title',
};

storiesOf('View', module).addDecorator(withKnobs)
  .add('colors', (() => {
    const label = 'Color';
    const defaultValue = 'consumer';
    const value = select(label, optionsView, defaultValue);
    return (
      <View type="purewhite" container direction="column" >
        <div style={{ marginLeft: 20, marginBottom: 50 }}>
          <h1>Test View</h1>
          <View
            direction="column"
            justify="center"
            align="center"
            round={number('Round', 20)}
            width={text('Width', '100%')}
            height={text('Height', '200')}
            type={value}
            padding={number('Padding', 20)}
          >
            <p>{text('Message', 'Text here...')}</p>
          </View>
        </div>
        <div style={{ marginLeft: 20 }}>
          <h1>Secondary Colours</h1>
        </div>
        <div
          style={{
            display: 'flex',
            flexFlow: 'wrap row',
            justifyContent: 'center',
            marginBottom: 50,
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <View direction="column" justify="center" align="center" type="red" height="200" width="200">
              <p>#F83E59</p>
              <p>RED</p>
            </View>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <View direction="column" justify="center" align="center" type="red_light" height="200" width="200">
              <p>#FD5E74</p>
              <p>RED LIGHT</p>
            </View>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <View direction="column" justify="center" align="center" type="blue" height="200" width="200">
              <p>#11CFDA</p>
              <p>BLUE</p>
            </View>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <View direction="column" justify="center" align="center" type="blue_light" height="200" width="200">
              <p>#71D6E2</p>
              <p>BLUE LIGHT</p>
            </View>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <View direction="column" justify="center" align="center" type="title" height="200" width="200">
              <p>#36424A</p>
              <p>TITLE</p>
            </View>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <View direction="column" justify="center" align="center" type="text" height="200" width="200">
              <p>#6E7A83</p>
              <p>TEXT</p>
            </View>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <View direction="column" justify="center" align="center" type="text2" height="200" width="200">
              <p>#B6BABD</p>
              <p>TEXT2</p>
            </View>
          </div>
        </div>
        <div style={{ marginLeft: 20 }}>
          <h1>Infrastructure Colors</h1>
        </div>
        <div
          style={{
            display: 'flex',
            flexFlow: 'wrap row',
            justifyContent: 'center',
            marginBottom: 50,
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <View justify="center" align="center" type="purewhite" height="200" width="200">
              <p>#FFFFFF</p>
            </View>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <View justify="center" align="center" type="spacewhite" height="200" width="200">
              <p>#FAFAFA</p>
            </View>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <View justify="center" align="center" type="night" height="200" width="200">
              <p>#1A1D1F</p>
            </View>
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            flexFlow: 'wrap row',
            justifyContent: 'center',
            marginBottom: 50,
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <View justify="center" align="center" type="positive" height="200" width="200">
              <p>#86D9C5</p>
            </View>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <View justify="center" align="center" type="negative" height="200" width="200">
              <p>#EF8B8B</p>
            </View>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <View justify="center" align="center" type="temporary" height="200" width="200">
              <p>#FBB86D</p>
            </View>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <View justify="center" align="center" type="neutral" height="200" width="200">
              <p>#6E7A83</p>
            </View>
          </div>
        </div>
      </View>
    );
  }));
