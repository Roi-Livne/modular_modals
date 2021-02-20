import React, { useState } from 'react';
import Modal from './components/Modal'
import logo from './logo.svg';
import './App.css';

export const ModalContext = React.createContext(null)


export function App() {
  const [modal, setModal] = useState({ isOpen: false, type: 'login' })

  const openModal = (type) => {
    setModal({ isOpen: true, type })
  }

  return (
    <ModalContext.Provider value={{ modal, openModal }}>
      <Modal />
      <div className="App">
        <header className="App-header">
          <h1>Modular React Modals</h1>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Choose a modal to open
        </p>
          <button onClick={() => openModal('login')}>Log in</button>
          <button onClick={() => openModal('signup')}>Sign up</button>
          <button onClick={() => openModal('buy')}>Buy now</button>
          <button onClick={() => openModal('credits')}>Credits</button>
        </header>
      </div>
    </ModalContext.Provider>
  );
}