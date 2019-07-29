import { configure } from '@storybook/react';
import { addParameters } from '@storybook/react';
import wasabi from "./wasabi";

// Option defaults.
addParameters({
  options: {
    theme: wasabi,
    addonPanelInRight: true,
  },
});

function loadStories() {
  require('../src/stories/index.js');
}

configure(loadStories, module);
