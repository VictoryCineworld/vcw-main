if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap");
}
import { store } from '../redux/store';
import { Provider } from "react-redux";
import '../styles/index.scss'
import { PersistGate } from "redux-persist/integration/react";
import { ToastContainer } from "react-toastify";
import AppProvider from '../context/AppContext';
import { persistStore } from "redux-persist";
import Preloader from '@components/preloader';
import { useEffect, useState } from 'react';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";


let persistor = persistStore(store)

function MyApp({ Component, pageProps }) {
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 4000);

    return () => clearTimeout(loadingTimeout);
  }, []);


  return (
    <>
 
      <Provider store={store}>
        <PersistGate loading={<Preloader />} persistor={persistor}>
          <AppProvider>
            {
              isLoading ?
                <>
                  <Preloader />
                </>
                :
                <>
                  <Component {...pageProps} />
                </>
            }
            <ToastContainer />
          </AppProvider>
        </PersistGate>
      </Provider>
    </>
  );
}

export default MyApp;
