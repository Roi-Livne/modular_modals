import React, { useState } from 'react';
import Modal from './components/Modal'
import logo from './logo.svg';
import './App.css';

export const ModalContext = React.createContext(null)


export function App() {
  const [modal, setModal] = useState({ isOpen: false, type: 'login' })

  const setModalParams = ({ isOpen, type }) => {
    setModal({ isOpen, type })
  }

  return (
    <ModalContext.Provider value={{ modal, setModalParams }}>
      <Modal />
      <div className="App">
        <header className="App-header">
          <h1>Modular React Modals</h1>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Choose a modal to open
        </p>
          <button onClick={() => setModalParams({ isOpen: true, type: 'login' })}>Log in</button>
          <button onClick={() => setModalParams({ isOpen: true, type: 'signup' })}>Sign up</button>
          <button onClick={() => setModalParams({ isOpen: true, type: 'buy' })}>Buy now</button>
          <button onClick={() => setModalParams({ isOpen: true, type: 'credits' })}>Credits</button>
        </header>
      </div>
    </ModalContext.Provider>
  );
}