import { BrowserRouter } from 'react-router-dom';

import { Footer, Navbar } from './layout';
import { AppRouter } from './router';

const App = () => (
  <BrowserRouter>
    <Navbar />
    <AppRouter />
    <Footer />
  </BrowserRouter>
);

export default App;
