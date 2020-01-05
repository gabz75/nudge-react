import '@testing-library/jest-dom/extend-expect';
import React from 'react';

import { render } from 'tests/helpers/render-with-theme';

import { Button, ButtonOutline, ButtonLink } from 'components/button';

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

  it('renders with type="reset"', () => {
    const { asFragment } = render(<Button type="reset" />);
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

describe('ButtonOutline`', () => {
  it('renders', () => {
    const { asFragment } = render(<ButtonOutline />);
    expect(asFragment()).toMatchSnapshot();
  });
});

describe('ButtonLink`', () => {
  it('renders', () => {
    const { asFragment } = render(<ButtonLink />);
    expect(asFragment()).toMatchSnapshot();
  });
});
