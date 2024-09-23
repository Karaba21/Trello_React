import React from 'react';
import { useState } from 'react'
import './App.css'
import 'bulma/css/bulma.min.css';

import Board from './components/Board';

const App = () => {
  return (
    <div className="app">
      <nav className="navbar is-primary" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="/">
            <strong>Trello-like App</strong>
          </a>
        </div>
      </nav>

      <section className="section">
        <div className="container">
          <Board />
        </div>
      </section>

      <footer className="footer">
        <div className="content has-text-centered">
          <p>
            <strong>Trello-like App</strong> built with React and Bulma.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;