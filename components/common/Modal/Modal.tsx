import React, { useEffect, useRef } from "react";
import { StyledDialog } from "./Modal.styled";
import Button from "../Button/Button";

interface ModalProps {
  isOpen: boolean;
  children: React.ReactNode;
  onClose: () => void;
}

const Modal = ({ isOpen, children, onClose }: ModalProps) => {
  const dialogRef = useRef<HTMLDialogElement | null>(null);

  useEffect(() => {
    if (isOpen && dialogRef.current) {
      dialogRef.current.showModal();
    } else {
      dialogRef.current?.close();
    }
  }, [isOpen]);

  return (
    <>
      {isOpen && (
        <StyledDialog ref={dialogRef} onClose={onClose}>
          {children}
          <Button type="button" variant="close" onClick={onClose}>
            <>Close</>
          </Button>
        </StyledDialog>
      )}
    </>
  );
};

export default Modal;
