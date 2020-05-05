import React from 'react';
import { FiX } from 'react-icons/fi';

import { Content, ContentArea } from './styles';

import { useModal } from '../../Modal';

const FullModal: React.FC = ({ children }) => {
  const { closeModal } = useModal();

  return (
    <ContentArea>
      <button type="button" onClick={() => closeModal()}>
        <FiX size={20} />
      </button>
      <Content>{children}</Content>
    </ContentArea>
  );
};

export default FullModal;
