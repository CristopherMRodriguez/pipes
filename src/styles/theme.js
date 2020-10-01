import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

export const theme = {
  font: {
    // ITC Franklin Gothic Standard, local import
    font1: {
      book: "'SirinStencil-Regular'', sans-serif",
      med: "'FranklinGothicStdMed', sans-serif",
      demi: "'FranklinGothicStdDemi', sans-serif",
      hvy: "'FranklinGothicStdHvy', sans-serif",
    },
    // URW Franklin Gothic, local import
    font2: {
      book: "'FranklinGothicURWBook', sans-serif",
      med: "'FranklinGothicURWMed', sans-serif",
    },
    // Google font, CDN
    font3: {
      normal: "'Lato', sans-serif",
    },
  },
  colors: {
    primary: {
      main: '#475310',
      light: '#FFE600', 
    },
    secondary: {
      main: '#EE982F',
      light: '#F6C282',
      dark: "#000000"
    },
    danger: {
      main: '#ff3f3f',
      light: '#f38282',
    },
    textPrimary: {
      main: '#fff',
      light: 'rgba(255, 255, 255, 0.5)',
      dark: '#302F2F',
    },
    textSecondary: {
      main: '#E29D4A',
    },
    textAccent: '#E29D4A',
    black: 'rgba(0, 0, 0, 0.9)', // Default black
    white: '#fff', // Default white
    backgrounds: {
      home: '#475310',
      light: '#FFE600',
      projects: '#302F2F',
      project: '#3F3F3F',
      gray: 'rgba(255,255,255, 0.1)',
    },
    separators: {
      // Page separators
      home: '#313131',
      projects: '#7C7C7C',
      searchInput: '#6b6b6b',
      card: '#d8d8d8',
    },
    modal: {
      overlay: 'rgba(30, 30, 30, .9)',
      border: '#313131'
    }
  },
  animations: {
    short: '130ms',
  },
  breakpoints: {
    xs: '600px',
    s: '768px',
    m: '992px',
    l: '1200px',
    xl: '1480px',
  },
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

Theme.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Theme;
