import React from 'react';
import styled from 'styled-components'
import DefaultHelpText from '../components/DefaultHelpText';
import PropTypes from 'prop-types';

let HelpText = styled(DefaultHelpText)`
`;

HelpText.contextTypes = {
  theme: PropTypes.string
};

export default HelpText;
