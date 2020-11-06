import React, { useCallback } from 'react';
import { FiX } from 'react-icons/fi';

import { Content, ContentArea } from './styles';

import { useModal } from '../../Modal';

import { ModalProps } from '../../@types';

const FullModal: React.FC<ModalProps> = ({ children, title, text, closeAction, closeActionSync }) => {
  const { closeModal } = useModal();

  const handleClose = useCallback(() => {
    if (closeAction) {
      closeAction();
    }
    if (closeActionSync) {
      closeActionSync();
    }
    closeModal();
  }, []);

  return (
    <ContentArea>
      <button type="button" onClick={handleClose}>
        <FiX size={20} />
      </button>
      <Content>
        {title && <h2>{title}</h2>}
        {text && <p>{text}</p>}
        {children}
      </Content>
    </ContentArea>
  );
};

export default FullModal;