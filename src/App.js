import React from 'react';
// import logo from './logo.svg';
// import './App.css';
// import './assets/styles/index.css';
import { Provider } from 'react-redux'
import store from './store/'
import Index from './router/'
// import IndexLayout from './pages/index/Layout'
// import TourLayout from './pages/Tour/Layout'
function App() {
  return (
    <Provider store={store}>
      <Index></Index>
    </Provider>
  );
}

export default App;
