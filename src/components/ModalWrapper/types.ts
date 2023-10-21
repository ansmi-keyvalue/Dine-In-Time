export type ModalWrapperProps = {
    isOpen: boolean;
    children: JSX.Element;
    onModalClose?: () => void;
    handleModalClose?: () => void;
    containerClassName?: string;
};
