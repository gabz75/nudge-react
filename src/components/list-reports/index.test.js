import React from 'react';

import { render } from 'tests/helpers/render-with-theme';

import DailyReport from './index';

describe('DailyReport', () => {
  it('renders', () => {
    const { queryAllByTestId } = render(<DailyReport />);
    expect(queryAllByTestId('goal')).not.toHaveLength(0);
  });
});
