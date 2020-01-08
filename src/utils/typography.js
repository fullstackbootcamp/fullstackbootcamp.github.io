import Typography from 'typography';

const typography = new Typography({
  baseFontSize: '18px',
  baseLineHeight: 1.65,
  headerFontFamily: ['Ubuntu', 'serif'],
  bodyFontFamily: ['Ubuntu Mono', 'monospace'],
  overrideStyles: () => ({
    a: {
      color: 'black',
    },
    td: {
      fontWeight: 400,
    },
  }),
});

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles();
}

export default typography;
export const rhythm = typography.rhythm;
export const scale = typography.scale;
