import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import greenTheme from './themes/green-theme';
import blueTheme from './themes/blue-theme';

// functional component stubs:
import Button from './styled-components/Button';
import Header from './styled-components/Header';
import FormRow from './styled-components/FormRow';
import HelpText from './styled-components/HelpText';
import Title from './styled-components/Title';

import './App.css';


class App extends Component {
  render() {
    return (
      <ThemeProvider theme={greenTheme}>
        <div className="App">
          <Header className={"App-header"}></Header>

          <Title type="h2">Before we start</Title>

          <FormRow className="help-text-container">
            <HelpText>Our web application is currently upgrading its style engine. Please stay tuned to see if our
              developer has succeeded in upgrading from SCSS files to styled components.
            </HelpText>
          </FormRow>

          <FormRow>
            <HelpText>This here is just another text like Lorem ipsum, to make this page a bit longer and with some
              apparent informative and useful content. But as you are reading right now, you can probably tell that
              there's nothing too informative here to see.
            </HelpText>
          </FormRow>

          <FormRow>
            <Button text="Terms" secondary></Button>
            <Button text="Get a quote" className="example"></Button>
          </FormRow>
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
