import React from 'react';
import { ThemeProvider } from 'react-native-elements';
import { QueryClient, QueryClientProvider } from 'react-query';
import { store } from './redux/stores';
import Routes from './routes/index';
import { Provider } from 'react-redux';
import { LogBox } from 'react-native';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';

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
