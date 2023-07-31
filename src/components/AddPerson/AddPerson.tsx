'use client';
import { FC, useState } from 'react';
import { AddButton } from '@/components/AddButton';
import { PersonModal } from '@/components/PersonModal';

export enum AddPersonConstant {
  ButtonText = 'Person',
}
const { ButtonText } = AddPersonConstant;

export const AddPerson: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  return (
    <div>
      <AddButton onClick={openModal} buttonText={ButtonText} />
      <PersonModal isModalOpen={isModalOpen} closeModal={closeModal} />
    </div>
  );
};
