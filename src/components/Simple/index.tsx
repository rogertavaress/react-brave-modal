import React from 'react';
import { FiX } from 'react-icons/fi';

import { Content, ContentArea } from './styles';

import { useModal } from '../../Modal';

const SimpleModal: React.FC = ({ children }) => {
  const { closeModal } = useModal();

  return (
    <ContentArea>
      <button type="button" onClick={() => closeModal()}>
        <FiX size={15} />
      </button>
      <Content>
        <p>
          adasdasdasd asdasdas dasdasda sdadsa sdasdasdasd asdasdas dasdasdas dasdasd adasdasdasd asdasdas
          dasdasdasdadsa sdasdasdasd asdasdas dasdasdasdasdasd adasdasdasd asdasdas dasdasdasdadsa sdasdasdasd asdasdas
          dasdasdasdasdasd adasdasdasd asdasdas dasda sdasdadsa sdasdasdasd asdasdas dasdasd asdasdasd adasdasdasd
          dasdasdasdadsa sdasdasdasd asdasdas dasdasdasdasdasd adasdasdasd asdasdas dasdasdasdadsa sdasdasdasd asdasdas
          dasdasdasdasdasd
        </p>
        {children}
      </Content>
    </ContentArea>
  );
};

export default SimpleModal;
