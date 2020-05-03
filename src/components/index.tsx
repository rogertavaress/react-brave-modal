import React from 'react';

import SimpleModal from './Simple';

import { ModalProps } from '../Modal';

import { Container } from './styles';

interface ModelContainerProps {
  newProps: ModalProps;
  show: boolean;
}

const ModelContainer: React.FC<ModelContainerProps> = ({ newProps, show }) => {
  return (
    <>
      {show && (
        <Container>
          <SimpleModal>{newProps.data}</SimpleModal>
        </Container>
      )}
    </>
  );
};

export default ModelContainer;
