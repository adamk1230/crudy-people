'use client';
import { FC, useState } from 'react';
import { AddButton } from '@/components/AddButton';
import { AddPersonModal } from '@/components/AddPersonModal';

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
      <AddPersonModal isModalOpen={isModalOpen} closeModal={closeModal} />
    </div>
  );
};
