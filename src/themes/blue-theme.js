import logo from '../resources/blue-theme.png';
import _ from '../styled-components/variables';

const blueTheme = {
  buttonStyles: {
    color: _.white,
    backgroundColor: _.baseBlue,
    border: `2px solid ${_.baseBlue}`,
    borderRadius: '3px',
    padding: '9px 12px',
    fontSize: '14px',
    cursor: 'pointer',
    hoverBackground: _.darkerBlue,
    hoverColor: _.white,
    margin: '20px 5px'
  },
  secondaryButtonStyles: {
    border: `2px solid ${_.baseBlue}`,
    backgroundColor: _.white,
    color: _.baseBlue
  },
  headerStyles: {
    minHeight: '150px',
    background: `${_.white} url(${logo}) no-repeat center`,
    backgroundSize: 'auto 100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 'calc(10px + 2vmin)',
    color: _.white
  },
  headingStyles: {
    fontFamily: 'Lucida Grande, sans-serif',
    letterSpacing: '-1.5px'
  }
};

export default blueTheme;