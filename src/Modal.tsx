import React, { createContext, useContext, useCallback, useState } from 'react';
import { ModalProps } from './@types';

import ModalContainer from './components';
import Empty from './components/Empty';

export interface ModalPropsGlobal extends ModalProps {
  type?: 'simple' | 'full' | 'custom' | '';
  data?: JSX.Element;
}

interface ModalContextData {
  showModal(data: ModalPropsGlobal): void;
  closeModal(): void;
}

const ModalContext = createContext<ModalContextData>({} as ModalContextData);

export const ModalProvider: React.FC = ({ children }) => {
  const [show, setShow] = useState(false);
  const [modal, setModal] = useState<ModalPropsGlobal>({} as ModalPropsGlobal);
  const [data, setData] = useState<JSX.Element>(<Empty />);

  const showModal = useCallback(
    ({ type = 'simple', data = <Empty />, text = '', title = '', closeAction, closeActionSync }: ModalPropsGlobal) => {
      setModal({ type, text, title, closeAction, closeActionSync });
      setShow(true);
      setData(data);
    },
    [],
  );

  const closeModal = useCallback(() => {
    setModal({
      type: '',
      data: <Empty />,
      text: '',
      title: '',
      closeAction: undefined,
      closeActionSync: undefined,
    });
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
