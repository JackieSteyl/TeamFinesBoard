/*
 * Dependencies
 */
// import React
import React from 'react';
// import ReactDOM
import ReactDOM from 'react-dom';
// import App
import App from './App';
/*
 * Setup
 */
// App render condition
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});
