import React, { useContext } from 'react'
import BuyModal from './modals/BuyModal'
import CreditsModal from './modals/CreditsModal'
import SignupModal from './modals/SignupModal'
import LoginModal from './modals/LoginModal'
import { ModalContext } from '../App'

function Modal() {
  const { modal, setModalParams } = useContext(ModalContext)

  const closeModal = (e) => {
    if (e.target.className === "modal__background") setModalParams({ isOpen: false, type: modal.type })
  }

  if (modal.isOpen) {
    return (
      <div className="modal__background" onClick={(e) => closeModal(e)}>
        {modal.type === 'login' && <LoginModal />}
        {modal.type === 'signup' && <SignupModal />}
        {modal.type === 'buy' && <BuyModal />}
        {modal.type === 'credits' && <CreditsModal />}
      </div>
    )
  } else return (<></>)
}

export default Modal
