import React from 'react';

import SimpleModal from './Simple';
import FullModal from './Full';

import { ModalProps, useModal } from '../Modal';

import { Container, Fundo } from './styles';

interface ModelContainerProps {
  newProps: ModalProps;
  show: boolean;
}

const ModelContainer: React.FC<ModelContainerProps> = ({ newProps, show }) => {
  const { closeModal } = useModal();

  return (
    <>
      {show && (
        <Container>
          {newProps.type === 'simple' && (
            <SimpleModal title={newProps.title} text={newProps.text}>
              {newProps.data}
            </SimpleModal>
          )}
          {newProps.type === 'full' && (
            <FullModal title={newProps.title} text={newProps.text}>
              {newProps.data}
            </FullModal>
          )}

          <Fundo
            onClick={() => {
              closeModal();
            }}
          ></Fundo>
        </Container>
      )}
    </>
  );
};

export default ModelContainer;
