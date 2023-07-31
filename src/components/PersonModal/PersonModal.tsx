import { FC } from 'react';
import { Person } from '@/firebase/PersonService';
import { Modal } from '@/components/Modal';
import { PersonInformation } from '../PersonInformation';

interface PersonModalProps {
  closeModal: () => void;
  isModalOpen: boolean;
  person?: Person | undefined;
}

export enum PersonModalConstant {
  ModalLabel = 'add person modal',
}
const { ModalLabel } = PersonModalConstant;

export const PersonModal: FC<PersonModalProps> = ({
  closeModal,
  isModalOpen,
  person,
}) => {
  return (
    <Modal
      ariaLabel={ModalLabel}
      closeModal={closeModal}
      isModalOpen={isModalOpen}
    >
      <PersonInformation closeModal={closeModal} person={person} />
    </Modal>
  );
};
