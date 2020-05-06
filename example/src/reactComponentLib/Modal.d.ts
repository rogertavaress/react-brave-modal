import React from 'react';
export interface ModalProps {
    type?: string;
    data?: React.FC | null;
    title?: string;
    text?: string;
}
interface ModalContextData {
    showModal(data: ModalProps): void;
    closeModal(): void;
}
export declare const ModalProvider: React.FC;
export declare const useModal: () => ModalContextData;
export {};