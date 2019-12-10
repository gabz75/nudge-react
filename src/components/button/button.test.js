import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render } from '@testing-library/react';

import Button from './button';

it('renders', () => {
  const { asFragment } = render(<Button />);
  expect(asFragment()).toMatchSnapshot();
});

describe('prop `label`', () => {
  it('renders with label="Submit', () => {
    const { asFragment } = render(<Button label="Submit" />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders with label="Ok', () => {
    const { asFragment } = render(<Button label="Ok" />);
    expect(asFragment()).toMatchSnapshot();
  });
});

describe('prop `type`', () => {
  it('renders with type="submit"', () => {
    const { asFragment } = render(<Button type="submit" />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders with type="button"', () => {
    const { asFragment } = render(<Button type="button" />);
    expect(asFragment()).toMatchSnapshot();
  });
});

describe('prop `className`', () => {
  it('renders with className="foobar"', () => {
    const { getByTestId } = render(<Button className="foobar" />);
    expect(getByTestId('button')).toHaveClass('foobar');
  });
});

describe('prop `size`', () => {
  it('console.error and throws given an invalid size', () => {
    /* eslint-disable no-console */
    const defaultConsoleError = console.error;
    console.error = jest.fn();
    expect(() => render(<Button size="foobar" />)).toThrow(new Error('Arguments after key must be arrays'));
    expect(console.error).toHaveBeenCalled();
    console.error = defaultConsoleError;
    /* eslint-enable no-console */
  });

  it('renders for `sm`', () => {
    const { asFragment } = render(<Button size="sm" />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders for `md`', () => {
    const { asFragment } = render(<Button size="md" />);
    expect(asFragment()).toMatchSnapshot();
  });
});

describe('prop `onClick`', () => {
  it('executes a callback', () => {
    const onClickHandler = jest.fn();
    const { getByTestId } = render(<Button onClick={onClickHandler} />);
    getByTestId('button').click();
    expect(onClickHandler).toHaveBeenCalled();
  });
});
