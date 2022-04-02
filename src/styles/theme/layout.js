import tokens from '../../../tokens/json/breakpoint.json'

const layout = {
  grid: {
    width: tokens.breakpoint.xl,
    columns: 12,
    gutter: {
      xs: '0.5rem',
      sm: '1rem',
      md: '1.5rem',
      lg: '1.5rem',
      xl: '1.5rem',
    },
    margin: {
      xs: '1rem',
      sm: '24px',
      md: '2rem',
      lg: '2rem',
      xl: '2rem',
    },
  },
  breakpoints: {
    xs: tokens.breakpoint.xs.value,
    sm: tokens.breakpoint.sm.value,
    md: tokens.breakpoint.md.value,
    lg: tokens.breakpoint.lg.value,
  },
}

export default layout
