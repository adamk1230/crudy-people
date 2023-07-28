import { FC } from 'react';
import { Modal } from '@/components/Modal';

interface AddPersonModalProps {
  closeModal: () => void;
  isModalOpen: boolean;
}

export enum AddPersonModalConstant {
  ModalLabel = 'add person modal',
}
const { ModalLabel } = AddPersonModalConstant;

export const AddPersonModal: FC<AddPersonModalProps> = ({
  isModalOpen,
  closeModal,
}) => {
  return (
    <Modal
      isModalOpen={isModalOpen}
      closeModal={closeModal}
      ariaLabel={ModalLabel}
    >
      <h1>place holder</h1>
    </Modal>
  );
};
