import React from 'react';
import { action } from '@storybook/addon-actions';

import Button from './button';
import '../../styles/tailwind.css';
import '../../styles/index.css';

export default {
  title: 'Button',
};

export const submit = () => <Button onClick={action('clicked')} type="submit" label="Submit" />;
export const button = () => <Button onClick={action('clicked')} label="Button" />;
export const reset = () => <Button onClick={action('clicked')} type="reset" label="Reset" />;

export const smallSubmit = () => <Button onClick={action('clicked')} type="submit" label="Submit" size="sm" />;
export const smallButton = () => <Button onClick={action('clicked')} label="Button" size="sm" />;
export const smallReset = () => <Button onClick={action('clicked')} type="reset" label="Reset" size="sm" />;
