import React from 'react';
import Weather from './components/weather/Weather';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import './App.css';


function App() {
  return (
    <Provider store={store}>
    <React.Fragment>
      <Weather/>

    </React.Fragment>
    </Provider>
    
    
  );
}

export default App;
