// Dependencies
import React from 'react';
import { Components, darken } from '@mui/material';

// Components
import { Icon } from '../components';

// Palette
import {
  cyan,
  darkCyan,
  lightCyan,
  white,
} from './palette';

// Shadows
import shadows from './shadows';

// Override interface
declare module '@mui/material/InputBase' {
  interface InputBasePropsSizeOverrides {
    large: true;
  }
}

// Override components
const components: Components = {
  MuiInputBase: {
    defaultProps: {
      size: 'small',
    },
    variants: [
      {
        props: { size: 'large' },
        style: {
          minHeight: 52,
          paddingLeft: '20px !important',
          borderRadius: '12px !important',
          '.MuiInputBase-inputAdornedStart': {
            paddingLeft: 8,
          },
        },
      },
    ],
    styleOverrides: {
      root: {
        minHeight: 44,
        backgroundColor: white,
        borderRadius: 8,
        fontSize: 16,
        lineHeight: '24px',
        padding: '10px 12px',
        '.MuiInputBase-inputAdornedStart': {
          paddingLeft: 8,
        },
        '.MuiInputBase-inputAdornedEnd': {
          paddingRight: 8,
        },
      },
    },
  },
  MuiCheckbox: {
    defaultProps: {
      color: 'primary',
    },
  },
  MuiSelect: {
    defaultProps: {
      disableUnderline: true,
      size: 'small',
      variant: 'standard',
      IconComponent: () => <Icon name="arrow-down" size={24} />,
    },
    styleOverrides: {
      select: {
        padding: '0 9px 0 0 !important',
        ':focus': {
          backgroundColor: 'transparent',
        },
      },
    },
  },
  MuiButton: {
    defaultProps: {
      size: 'small',
      color: 'secondary',
      variant: 'contained',
      disableElevation: true,
    },
    styleOverrides: {
      root: {
        textTransform: 'unset',
      },
      startIcon: {
        marginLeft: 0,
      },
      containedSecondary: {
        ':hover': {
          backgroundColor: darken(lightCyan, 0.01),
        },
      },
      sizeSmall: {
        fontSize: 14,
        lineHeight: '24px',
        borderRadius: 8,
        padding: '6px 20px',
      },
      sizeMedium: {
        fontSize: 16,
        lineHeight: '24px',
        borderRadius: 12,
        padding: '12px 20px',
      },
      sizeLarge: {
        fontSize: 16,
        lineHeight: '24px',
        borderRadius: 12,
        padding: '14px 32px',
      },
    },
  },
  MuiIconButton: {
    defaultProps: {
      size: 'small',
      color: 'primary',
    },
    styleOverrides: {
      root: {
        borderRadius: 10,
      },
      colorPrimary: {
        backgroundColor: lightCyan,
        ':hover': {
          backgroundColor: darken(lightCyan, 0.01),
        },
      },
      sizeSmall: {
        height: 36,
        width: 36,
      },
      sizeMedium: {
        height: 48,
        width: 48,
      },
      sizeLarge: {
        height: 52,
        width: 52,
      },
    },
  },
  MuiPaper: {
    styleOverrides: {
      root: {
        borderRadius: 12,
        boxShadow: shadows[1],
      },
    },
  },
  MuiAvatar: {
    defaultProps: {
      variant: 'rounded',
      children: <Icon name="home" />,
    },
    styleOverrides: {
      root: {
        backgroundColor: cyan,
      },
      rounded: {
        width: 64,
        height: 48,
        borderRadius: 10,
        color: darkCyan,
      },
    },
  },
  MuiChip: {
    defaultProps: {
      color: 'info',
      size: 'small',
    },
    styleOverrides: {
      root: {
        borderRadius: 4,
      },
      label: {
        fontWeight: 500,
      },
      labelSmall: {
        fontSize: 12,
        lineHeight: '20px',
        padding: '2px 10px',
      },
    },
  },
  MuiDivider: {
    styleOverrides: {
      root: {
        margin: '12px 0',
      },
    }
  }
};

// Export components
export default components;
