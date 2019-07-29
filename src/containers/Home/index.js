import React from 'react';

import Button from '../../components/Button';
import View from '../../components/View';
import Text from '../../components/Text';

import COLOR_PALETTE from '../../Constants';
import QuizzCard from '../QuizzCard';

const Home = () => (
  <View direction="column" align="center" height="100vh" type="rice">
    <View height={50} type="lightTea" />
    <View height={300} padding={10} type="rice">
      <View
        align="space-between"
        justify="space-between"
        type="purewhite"
        padding={10}
        round={20}
        style={{
          boxShadow: 'rgba(0, 0, 0, 0.12) 0px 19px 70px 0px',
        }}
      >
        <QuizzCard />
      </View>
    </View>
  </View>
);

export default Home;
