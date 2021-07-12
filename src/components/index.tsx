import React from 'react';

import SimpleModal from './Simple';
import FullModal from './Full';
import CustomModal from './Custom';

import { ModalPropsGlobal, useModal } from '../Modal';

import { Container, Fundo } from './styles';

interface ModelContainerProps {
  newProps: ModalPropsGlobal;
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
            <SimpleModal
              title={newProps.title}
              text={newProps.text}
              closeAction={newProps.closeAction}
              closeActionSync={newProps.closeActionSync}
              canCloseWithNativeMode={newProps.canCloseWithNativeMode}
            >
              {data}
            </SimpleModal>
          )}
          {newProps.type === 'full' && (
            <FullModal
              title={newProps.title}
              text={newProps.text}
              closeAction={newProps.closeAction}
              closeActionSync={newProps.closeActionSync}
              canCloseWithNativeMode={newProps.canCloseWithNativeMode}
            >
              {data}
            </FullModal>
          )}
          {newProps.type === 'custom' && (
            <CustomModal
              title={newProps.title}
              text={newProps.text}
              closeAction={newProps.closeAction}
              closeActionSync={newProps.closeActionSync}
              canCloseWithNativeMode={newProps.canCloseWithNativeMode}
            >
              {data}
            </CustomModal>
          )}

          <Fundo
            onClick={() => {
              if (newProps.canCloseWithNativeMode) {
                if (newProps.closeAction) {
                  newProps.closeAction();
                }
                if (newProps.closeActionSync) {
                  newProps.closeActionSync();
                }
                closeModal();
              }
            }}
          ></Fundo>
        </Container>
      )}
    </>
  );
};

export default ModelContainer;
