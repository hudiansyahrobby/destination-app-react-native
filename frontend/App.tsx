import React from 'react';
import { ThemeProvider } from 'react-native-elements';
import Routes from './routes/index';

const App = () => {
  return (
    <ThemeProvider>
      <Routes />
    </ThemeProvider>
  );
};

export default App;
