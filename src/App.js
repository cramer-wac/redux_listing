import React from 'react';

import './App.css';

import Footer from "./components/footer/Footer";

import Lister from "./components/lister/Lister";
import store from "./store/index";

import { Provider } from 'react-redux';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <div>
          <Lister />
          <Footer />
        </div>
      </Provider>
    </div>
  );
}

export default App;
