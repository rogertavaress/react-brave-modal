import React from 'react';
import { useTransition } from 'react-spring';

import SimpleModal from './Simple';

import { ModalProps } from '..';

import { Container } from './styles';

interface ModelContainerProps {
  newProps: ModalProps;
}

const ModelContainer: React.FC<ModelContainerProps> = ({ newProps }) => {
  return (
    <Container>
      <SimpleModal>{newProps.data}</SimpleModal>
    </Container>
  );
};

export default ModelContainer;
