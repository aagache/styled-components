import logo from '../resources/green-theme.jpg';
import _ from '../styled-components/variables';

const greenTheme = {
  buttonStyles: {
    color: _.white,
    backgroundColor: _.baseGreen,
    border: _.none,
    borderRadius: '3px',
    padding: '9px 12px',
    fontSize: '14px',
    cursor: 'pointer',
    hoverBackground: _.darkerGreen,
    hoverColor: 'white',
    margin: '10px 5px'
  },
  headerStyles: {
    minHeight: '170px',
    background: `${_.baseGreen} url(${logo}) no-repeat center`,
    backgroundSize: 'auto 100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 'calc(10px + 2vmin)',
    color: 'white'
  },
  headingStyles: {
    fontFamily: 'Lucida Grande, sans-serif',
    letterSpacing: '-`p'
  }
};

export default greenTheme;