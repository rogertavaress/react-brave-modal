import React from 'react';

import SimpleModal from './Simple';
import FullModal from './Full';
import CustomModal from './Custom';

import { ModalProps, useModal } from '../Modal';

import { Container, Fundo } from './styles';

interface ModelContainerProps {
  newProps: ModalProps;
  show: boolean;
  data: JSX.Element;
}

const ModelContainer: React.FC<ModelContainerProps> = ({ newProps, show, data }) => {
  const { closeModal } = useModal();

  return (
    <>
      {show && (
        <Container>
          {newProps.type === 'simple' && (
            <SimpleModal title={newProps.title} text={newProps.text}>
              {data}
            </SimpleModal>
          )}
          {newProps.type === 'full' && (
            <FullModal title={newProps.title} text={newProps.text}>
              {data}
            </FullModal>
          )}
          {newProps.type === 'custom' && (
            <CustomModal title={newProps.title} text={newProps.text}>
              {data}
            </CustomModal>
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
