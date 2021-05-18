import React, { FunctionComponent } from 'react';
import { Provider as StyletronProvider } from 'styletron-react';
import { createStyled } from 'styletron-react';
import { driver, getInitialStyle } from 'styletron-standard';
import { styletron } from '../styletron';
import '../styles/globals.css';
import { THEME } from '../styles/theme';

const { Provider, Consumer } = React.createContext({});

const ThemeProvider: FunctionComponent = ({ children }) => (
  <Provider value={THEME}>{children}</Provider>
);

const wrapper = (StyledComponent: React.ComponentType) =>
  function withThemeHOC(props: any) {
    return (
      <Consumer>
        {(theme) => <StyledComponent {...props} $theme={theme} />}
      </Consumer>
    );
  };

export const styled = createStyled({ wrapper, getInitialStyle, driver });

function App({ Component, pageProps }) {
  return (
    <StyletronProvider value={styletron}>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </StyletronProvider>
  );
}

export default App;
