import React from 'react';
import { Provider } from 'react-redux';
import Test from "./components/Test";
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <h2>Hello World</h2>
      <Test />
    </Provider>
  );
}

export default App;
