import React from 'react';
import { action } from '@storybook/addon-actions';

import Input from './input';
import '../../styles/tailwind.css';
import '../../styles/index.css';

export default {
  title: 'Input',
};

export const basic = () => <Input label="Input" value="" onChange={action('onChange')} />;
