import React from 'react';
import styled from 'styled-components'
import DefaultButton from '../components/DefaultButton';
import _ from '../styled-components/variables';

let Button = styled(DefaultButton)`
  ${props => {
    const primaryBtn = props.theme.buttonStyles;
    const secondaryBtn = props.theme.secondaryButtonStyles;
    
    return `
      color: ${primaryBtn.color};
      background-color: ${primaryBtn.backgroundColor};
      border: ${primaryBtn.border};
      border-radius: ${primaryBtn.borderRadius};
      padding: ${primaryBtn.padding};
      font-size: ${primaryBtn.fontSize};
      cursor: ${primaryBtn.cursor};
      margin: ${primaryBtn.margin};
      
      &:hover {
        background-color: ${primaryBtn.hoverBackground};
        color: ${primaryBtn.hoverColor};
      }
      
      ${props.secondary && secondaryBtn && `
        background-color: ${secondaryBtn.backgroundColor};
        border: ${secondaryBtn.border};
        color: ${secondaryBtn.color};
      `};
      
      @media only screen and (max-width: ${_.medium}) {
        width: 50%;
      }
      
      @media only screen and (max-width: ${_.small}) {
        width: 90%;
      }
    `}
  }
`;

Button.defaultProps = {
  theme: {
    buttonStyles: {
      color: _.black,
      backgroundColor: '#ccc',
      border: '2px solid #ccc',
      borderRadius: '2px',
      padding: '12px',
      fontSize: '14px',
      cursor: 'normal',
      hoverBackground: '#bbb',
      hoverColor: 'inherit',
      margin: '5px 10px'
    },
    secondaryButtonStyles: {
      border: '2px solid #ccc',
      backgroundColor: _.white,
      color: '#333'
    }
  }
};

export default Button;
