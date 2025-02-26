import "@/styles/globals.css";
import './components/Header/header.css';
import './components/Footer/footer.css';
import Header from './components/Header';
import Footer from './components/Footer';
export default function App({ Component, pageProps }) {
  return(
    <>
     <Header />
    <Component {...pageProps} />
    <Footer/>
    </>
  );
}
