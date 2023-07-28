'use client';
import { FC } from 'react';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

export interface AddButtonProps {
  buttonText: string;
  onClick: () => void;
}

export enum AddButtonConstant {
  ButtonAriaLabel = 'add',
}
const { ButtonAriaLabel } = AddButtonConstant;

export const AddButton: FC<AddButtonProps> = ({ buttonText, onClick }) => {
  return (
    <Button
      variant="outlined"
      startIcon={<AddIcon />}
      color="success"
      onClick={onClick}
      role="button"
      aria-label={ButtonAriaLabel}
    >
      {buttonText}
    </Button>
  );
};
