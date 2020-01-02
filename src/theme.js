/* eslint prefer-destructuring: 0 */

const space = [0, 4, 8, 16, 32, 64];

space.xs = space[1]; // 4
space.sm = space[2]; // 8
space.md = space[3]; // 16
space.lg = space[4]; // 32
space.xl = space[5]; // 64

export default {
  space,

  colors: {
    border: '#dedede',
    borderFocus: '#000',
    body: '#fcfafa',
    backgroundColor: '#ffffff',
    text: {
      gray: '#dedede',
    },
  },

  fontSizes: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 20,
    xl: 24,
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
