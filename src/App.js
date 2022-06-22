import './App.css';
import Main from './components/Main';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';
import Header from './components/common/Header';
import Layout from './components/common/Layout';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* <Main /> */}
      <Header />

      <Layout />
    </ThemeProvider>
  );
}

export default App;
