import React from 'react';
import { Placeholder } from '@project/basic-components';

import { Placeholder as PlaceholderFromComponents } from '../../components';

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit
          <code> src/App.js </code>
          and save to reload.
        </p>
        <Placeholder text="Placeholder from @project/basic-components" />
        <PlaceholderFromComponents text="Placeholder from @project/app" />
      </header>
    </div>
  );
}

export default App;
