import React, { useState } from 'react';
import { Modal } from './componentes/Modal/Modal';

function App() {
  const [show, setShow] = useState(false);

  const closeModalHandler = () => setShow(false);

  return (
    <div>
      { show ? <div onClick={closeModalHandler} className="back-drop"></div> : null }
      <button onClick={() => setShow(true)} className="btn-openModal">Abrir modal</button>
      <Modal show={show} close={closeModalHandler} />
    </div>
  );
}

export default App;
