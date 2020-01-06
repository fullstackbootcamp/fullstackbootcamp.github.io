import Typography from 'typography';

const typography = new Typography({
  baseFontSize: '18px',
  baseLineHeight: 1.65,
  headerFontFamily: ['Playfair Display', 'serif'],
  bodyFontFamily: ['Source Sans Pro', 'sans-serif'],
  overrideStyles: () => ({
    a: {
      color: 'black',
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
