import { useState } from 'react';
import Modal from './Modal';


const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <button onClick={handleModalOpen}>Open Modal</button>
      <Modal isOpen={isModalOpen} onClose={handleModalClose} />
    </>
  );
};

export default App;
