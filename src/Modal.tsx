import React, { createContext, useContext, useCallback, useState } from 'react';

import ModalContainer from './components';

export interface ModalProps {
  type?: string;
  data?: React.FC | null;
  title?: string;
  text?: string;
}

interface ModalContextData {
  showModal(data: ModalProps): void;
  closeModal(): void;
}

const ModalContext = createContext<ModalContextData>({} as ModalContextData);

export const ModalProvider: React.FC = ({ children }) => {
  const [show, setShow] = useState(false);
  const [modal, setModal] = useState<ModalProps>({} as ModalProps);

  const showModal = useCallback(({ type = 'simple', data = null, text = '', title = '' }: ModalProps) => {
    setModal({ type, data, text, title });
    setShow(true);
  }, []);

  const closeModal = useCallback(() => {
    setModal({ type: '', data: null, text: '', title: '' });
    setShow(false);
  }, []);

  return (
    <ModalContext.Provider value={{ showModal, closeModal }}>
      {children}
      <ModalContainer newProps={modal} show={show} />
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
