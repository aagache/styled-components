import React from 'react';
import styled from 'styled-components'
import DefaultHeader from '../components/DefaultHeader';
import logo from '../resources/default-theme.png';

let Header = styled(DefaultHeader)`
  ${props => {
    const header = props.theme.headerStyles;
    
    return `
      min-height: ${header.minHeight};
      background: ${header.background};
      background-size: ${header.backgroundSize};
      display: ${header.display};
      flex-direction: ${header.flexDirection};
      align-items: ${header.alignItems};
      justify-content: ${header.justifyContent};
      font-size: ${header.fontSize};
      color: ${header.color};
    `}
  }
`;

Header.defaultProps = {
  theme: {
    headerStyles: {
      minHeight: '180px',
      background: `#5A2A7C url(${logo}) no-repeat center`,
      backgroundSize: '65%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '12px',
      color: 'white'
    }
  }
};

export default Header;
