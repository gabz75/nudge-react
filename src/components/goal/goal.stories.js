import React from 'react';
import { action } from '@storybook/addon-actions';

import Goal from './goal';
import '../../styles/tailwind.css';
import '../../styles/index.css';

export default {
  title: 'Goal',
};

const goal = {
  id: 1,
  name: 'Meditate',
  color: '#dedede',
  public: true,
};

export const basic = () => (
  <div>
    <Goal onDelete={action('clicked')} goal={goal} />
    <Goal onDelete={action('clicked')} goal={goal} />
  </div>
);
