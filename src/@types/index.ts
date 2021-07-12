export interface ModalProps {
  title?: string;
  text?: string;
  closeAction?: () => Promise<void>;
  closeActionSync?: () => void;
  canCloseWithNativeMode?: boolean;
}
