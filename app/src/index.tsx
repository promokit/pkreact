import React from 'react';
import ReactDOM from 'react-dom';
import store from './providers/store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import ScrollToTop from './components/ScrollToTop/ScrollToTop';

import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ScrollToTop /> {/* used to scroll page to top if URL was changed */}
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
