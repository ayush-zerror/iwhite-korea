import "@/styles/globals.css";
import Context from "@/utils/Context";
import 'remixicon/fonts/remixicon.css'


export default function App({ Component, pageProps }) {
  return (
    <Context>
      <Component {...pageProps} />
    </Context>
  );
}

