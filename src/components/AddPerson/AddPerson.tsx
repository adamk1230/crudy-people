'use client';
import { FC } from 'react';
import { AddButton } from '@/components/AddButton';

const BUTTON_TEXT = 'Person';

export const AddPerson: FC = () => {
  const openModal = () => {
    //place holder
  };
  return <AddButton onClick={openModal} buttonText={BUTTON_TEXT} />;
};
