import React from 'react';
import { ThemeProvider } from 'react-native-elements';
import { QueryClient, QueryClientProvider } from 'react-query';
import Routes from './routes/index';

const App = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <Routes />
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
