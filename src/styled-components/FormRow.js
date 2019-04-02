import React from 'react';
import styled from 'styled-components'
import DefaultFormRow from '../components/DefaultFormRow';
import PropTypes from 'prop-types';

let FormRow = styled(DefaultFormRow)`
  padding: 0 20px;
`;

FormRow.contextTypes = {
  theme: PropTypes.string
};

export default FormRow;
