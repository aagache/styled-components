import React from 'react';
import styled from 'styled-components'
import DefaultTitle from '../components/DefaultTitle';

let Title = styled(DefaultTitle)`
  ${props => {
    const heading = props.theme.headingStyles;
    
    return `
      font-family: ${heading.fontFamily};
      letter-spacing: ${heading.letterSpacing};
    `}
  }
`;

Title.defaultProps = {
  theme: {
    headingStyles: {
      fontFamily: 'Arial, sans-serif',
      letterSpacing: '0'
    }
  }
};

export default Title;
