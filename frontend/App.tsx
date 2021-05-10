import React, { useEffect } from 'react';
import { LogBox } from 'react-native';
import { ThemeProvider } from 'react-native-elements';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import { store } from './redux/stores';
import Routes from './routes/index';
import SplashScreen from 'react-native-splash-screen';

LogBox.ignoreLogs(['Setting a timer']);

const App = () => {
  const queryClient = new QueryClient();
  let persistor = persistStore(store);

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ThemeProvider>
            <Routes />
          </ThemeProvider>
        </PersistGate>
      </Provider>
    </QueryClientProvider>
  );
};

export default App;
