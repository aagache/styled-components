import React from 'react';
import styled from 'styled-components';

class DefaultButton extends React.Component {
  render() {
    return <button className={this.props.className}>
      {this.props.text}
    </button>;
  }
}

// if you want to have both functionality and styles in the same component, uncomment and update the styles below

// DefaultButton = styled(DefaultButton)`
//   color: ${props => props.theme.buttonStyles.color};
//   background-color: ${props => props.theme.buttonStyles.backgroundColor};
// `;
//
// DefaultButton.defaultProps = {
//   theme: {
//     buttonStyles: {
//       color: 'red',
//       backgroundColor: 'orange'
//     }
//   }
// };

export default DefaultButton;