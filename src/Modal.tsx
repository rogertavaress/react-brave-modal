import React, { createContext, useContext, useCallback, useState } from 'react';

import ModalContainer from './components';
import Empty from './components/Empty';

export interface ModalProps {
  type?: string;
  title?: string;
  text?: string;
  data?: JSX.Element;
}

interface ModalContextData {
  showModal(data: ModalProps): void;
  closeModal(): void;
}

const ModalContext = createContext<ModalContextData>({} as ModalContextData);

export const ModalProvider: React.FC = ({ children }) => {
  const [show, setShow] = useState(false);
  const [modal, setModal] = useState<ModalProps>({} as ModalProps);
  const [data, setData] = useState<JSX.Element>(<Empty />);

  const showModal = useCallback(({ type = 'simple', data = <Empty />, text = '', title = '' }: ModalProps) => {
    setModal({ type, text, title });
    setShow(true);
    setData(data);
  }, []);

  const closeModal = useCallback(() => {
    setModal({ type: '', data: <Empty />, text: '', title: '' });
    setShow(false);
  }, []);

  return (
    <ModalContext.Provider value={{ showModal, closeModal }}>
      <ModalContainer newProps={modal} show={show} data={data} />
      {children}
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
