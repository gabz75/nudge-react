import React from 'react';
import { action } from '@storybook/addon-actions';

import Checkbox from './checkbox';
import '../../styles/tailwind.css';
import '../../styles/index.css';

export default {
  title: 'Checkbox',
};

export const basic = () => <Checkbox label="Checkbox" value="" onChange={action('onChange')} />;
