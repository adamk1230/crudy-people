'use client';
import { FC } from 'react';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

export interface AddButtonProps {
  buttonText: string;
  onClick: () => void;
}

export const AddButton: FC<AddButtonProps> = ({ buttonText, onClick }) => {
  return (
    <Button
      variant="outlined"
      startIcon={<AddIcon />}
      color="success"
      onClick={onClick}
    >
      {buttonText}
    </Button>
  );
};
