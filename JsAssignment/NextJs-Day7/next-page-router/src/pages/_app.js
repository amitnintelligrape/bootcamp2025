import "@/styles/globals.css";
import './components/Header/header.css';
import './components/Footer/footer.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { LoaderProvider } from './context/LoaderContext';
import { Provider } from 'react-redux';
import store from '../redux/store';
export default function App({ Component, pageProps }) {
  return( 
  <Provider store={store}>
  <LoaderProvider>
    <Header />
    <Component {...pageProps} />
    <Footer/>
  </LoaderProvider>
  </Provider>
  )
}
