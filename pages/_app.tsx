import { Provider as StyletronProvider } from 'styletron-react';
import { styletron } from '../styletron';
import '../styles/globals.css';

function App({ Component, pageProps }) {
  return (
    <StyletronProvider value={styletron}>
      <Component {...pageProps} />
    </StyletronProvider>
  );
}

export default App;
