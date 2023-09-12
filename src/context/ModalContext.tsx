import { createContext, useState } from 'react';

interface IModalContext {
  modalActive: boolean;
  openModal: () => void;
  closeModal: () => void;
}

const ModalContext = createContext<IModalContext>({
  modalActive: false,
  openModal: () => {},
  closeModal: () => {},
});

const ModalContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [modalActive, setModalActive] = useState(false);

  const openModal = () => setModalActive(true);
  const closeModal = () => setModalActive(false);

  return (
    <ModalContext.Provider
      value={{
        modalActive,
        openModal,
        closeModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export { ModalContext, ModalContextProvider };
