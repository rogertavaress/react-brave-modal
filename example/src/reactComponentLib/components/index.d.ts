import React from 'react';
import { ModalProps } from '../Modal';
interface ModelContainerProps {
    newProps: ModalProps;
    show: boolean;
    data: React.FC;
}
declare const ModelContainer: React.FC<ModelContainerProps>;
export default ModelContainer;
