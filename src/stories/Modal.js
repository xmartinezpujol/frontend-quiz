import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs';

import Modal from '../components/Modal';

const app = document.createElement('div');
app.setAttribute('id', 'modal');
document.body.appendChild(app);

storiesOf('Modal', module).addDecorator(withKnobs)
  .add('default', () => (
    <ModalControlled
      opened={boolean('Opened', true)}
    />
  ));

const ModalControlled = props => (
  <React.Fragment>
    {props.opened &&
    <Modal
      padding={35}
      onModalClose={() => alert('Modal Close Event triggered')}
      windowed={boolean('Full window ', false)}
    >
      This a modal with some text.
    </Modal>
    }
  </React.Fragment>
);
