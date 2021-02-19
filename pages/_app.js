import '../styles/globals.css';
import { Provider } from 'react-redux';
import { useStore } from '../store';

function MyApp({ Component, pageProps }) {

  // Here you can check some store for initialize the state of reducers,
  // for example by loading some json info
  const store = useStore(pageProps.initialReduxState);
  // or simply try with useStore({});
  

  return(
    <Provider store = {store} >
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp
