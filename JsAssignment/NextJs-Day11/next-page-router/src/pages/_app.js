import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import {Roboto} from 'next/font/google';
const roboto = Roboto({
  weight: '400',
  subsets:['latin']
})
export default function App({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <div className={roboto.className}>
        <Component {...pageProps} />
      </div>
    </SessionProvider>
  );
}