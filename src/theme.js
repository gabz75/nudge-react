/* eslint prefer-destructuring: 0 */

const space = [0, '4px', '8px', '16px', '32px', '64px'];

space.xs = space[1]; // 4
space.sm = space[2]; // 8
space.md = space[3]; // 16
space.lg = space[4]; // 32
space.xl = space[5]; // 64

export default {
  space,

  colors: {
    primary: '#4b8bf2',
    lightBlue: '#93d2d8',
    red: '#fa7a7a',
    border: '#dedede',
    borderFocus: '#000',
    body: '#fcfafa',
    backgroundColor: '#ffffff',
    text: {
      gray: '#93979c',
    },
  },

  fontSizes: {
    xs: '12px',
    sm: '14px',
    md: '16px',
    lg: '20px',
    xl: '24px',
  },

  buttons: {
    primary: {
      color: 'white',
      backgroundColor: '#4b8bf2',
      backgroundColorActive: '#3672d1',
      borderColor: '#c0d7fc',
    },
  },
};
