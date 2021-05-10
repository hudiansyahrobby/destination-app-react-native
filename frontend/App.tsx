import React from 'react';
import { LogBox } from 'react-native';
import { ThemeProvider } from 'react-native-elements';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import { store } from './redux/stores';
import Routes from './routes/index';

LogBox.ignoreLogs(['Setting a timer']);

const App = () => {
  const queryClient = new QueryClient();
  let persistor = persistStore(store);

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
