import React, { createContext, useContext, useCallback, useState } from 'react';

import ModalContainer from './components';

export interface ModalProps {
  show: boolean;
  type?: string;
  data?: React.FC | null;
}

interface ModalContextData {
  showModal(data: ModalProps): void;
  closeModal(): void;
}

const ModalContext = createContext<ModalContextData>({} as ModalContextData);

export const ModalProvider: React.FC = ({ children }) => {
  const [modal, setModal] = useState<ModalProps>({} as ModalProps);

  const showModal = useCallback(
    ({ show = false, type = '', data = null }: ModalProps) => {
      setModal({ show, type, data });
    },
    [],
  );

  const closeModal = useCallback(() => {
    setModal({ show: false, data: null });
  }, []);

  return (
    <ModalContext.Provider value={{ showModal, closeModal }}>
      {children}
      <ModalContainer newProps={modal} />
    </ModalContext.Provider>
  );
};

export const useModal = (): ModalContextData => {
  const context = useContext(ModalContext);

  if (!context) {
    throw new Error('useModal must be used within a ModalProvider');
  }

  return context;
};
