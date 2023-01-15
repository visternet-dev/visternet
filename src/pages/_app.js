// global styles
import { PersistGate } from "redux-persist/integration/react";

import React from "react";
// third-party
import { Provider } from "react-redux";

// calendar - styles
import "@fullcalendar/common/main.css";
import "@fullcalendar/daygrid/main.css";
import "@fullcalendar/timegrid/main.css";
import { Hydrate, QueryClient, QueryClientProvider } from "@tanstack/react-query";

// styles
import "scss/style.scss";
import { persister, store } from "store";
import "styles/globals.css";

// project import
import NavigationScroll from "layout/NavigationScroll";
import ThemeCustomization from "themes";

import Snackbar from "components/ui-component/extended/Snackbar";
import Locales from "components/ui-component/Locales";
import RTLLayout from "components/ui-component/RTLLayout";
import { ConfigProvider } from "contexts/ConfigContext";

import PropTypes from "prop-types";

import { FirebaseProvider as AuthProvider } from "../contexts/FirebaseContext";

// import { Auth0Provider as AuthProvider } from '../contexts/Auth0Context';
// import { JWTProvider as AuthProvider } from 'contexts/JWTContext';
// import { AWSCognitoProvider as AuthProvider } from 'contexts/AWSCognitoContext';

const Noop = ({ children }) => <> {children} </>;

Noop.propTypes = {
  children: PropTypes.node
};

// ==============================|| APP ||============================== //

function App({ Component, pageProps }) {
  const getLayout = Component.getLayout ?? ((page) => page);

  const queryClient = React.useRef(new QueryClient());

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persister}>
        <ConfigProvider>
          <ThemeCustomization>
            <RTLLayout>
              <Locales>
                <QueryClientProvider client={queryClient.current}>
                  <Hydrate state={pageProps.dehydratedState}>
                    <NavigationScroll>
                      <AuthProvider>
                        <>
                          {getLayout(<Component {...pageProps} />)}
                          <Snackbar />
                        </>
                      </AuthProvider>
                    </NavigationScroll>
                  </Hydrate>
                </QueryClientProvider>
              </Locales>
            </RTLLayout>
          </ThemeCustomization>
        </ConfigProvider>
      </PersistGate>
    </Provider>
  );
}

App.propTypes = {
  Component: PropTypes.func,
  pageProps: PropTypes.object
};

export default App;
