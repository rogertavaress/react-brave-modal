import React from 'react';
import { FiX } from 'react-icons/fi';

import { Content, ContentArea } from './styles';

import { useModal } from '../../Modal';

interface ModalProps {
  title?: string;
  text?: string;
}

const SimpleModal: React.FC<ModalProps> = ({ children, title, text }) => {
  const { closeModal } = useModal();

  return (
    <ContentArea>
      <button type="button" onClick={() => closeModal()}>
        <FiX size={15} />
      </button>
      <Content>
        <h2>{title}</h2>
        <p>{text}</p>
        {children}
      </Content>
    </ContentArea>
  );
};

export default SimpleModal;
