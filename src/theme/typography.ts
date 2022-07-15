// Declare type
declare module '@mui/material/styles' {}

declare module '@mui/material/Typography' {}

// Define typography
const typography = {
  fontFamily: '"Work Sans"',
  h1: {
    fontWeight: 600,
    fontSize: 34,
    lineHeight: '48px',
  },
  h2: {
    fontWeight: 600,
    fontSize: 24,
    lineHeight: '36px',
  },
  h3: {
    fontWeight: 600,
    fontSize: 20,
    lineHeight: '32px',
  },
  subtitle1: {
    fontWeight: 500,
    fontSize: 16,
    lineHeight: '24px',
  },
  subtitle2: {
    fontWeight: 500,
    fontSize: 14,
    lineHeight: '24px',
  },
  body1: {
    fontSize: 16,
    lineHeight: '24px',
  },
  body2: {
    fontSize: 14,
    lineHeight: '24px',
  },
  caption: {
    fontSize: 12,
    lineHeight: '20px',
  },
};

// Export typography
export default typography;
