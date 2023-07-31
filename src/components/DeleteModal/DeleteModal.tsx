import { FC } from 'react';
import Typography from '@mui/material/Typography';
import { Modal } from '@/components/Modal';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

interface DeleteModalProps {
  closeModal: () => void;
  handleDelete: () => void;
  isModalOpen: boolean;
  thingToDelete: string;
}

export const DeleteModal: FC<DeleteModalProps> = ({
  closeModal,
  handleDelete,
  isModalOpen,
  thingToDelete,
}) => {
  const onDelete = () => {
    handleDelete();
    closeModal();
  };
  return (
    <Modal isModalOpen={isModalOpen} closeModal={closeModal}>
      <Typography variant="h6" className="text-brilliant-blue">
        Are you sure you want to delete {thingToDelete}?
      </Typography>
      <Stack
        spacing={4}
        direction="row"
        className="mt-5"
        justifyContent="center"
      >
        <Button type="button" variant="text" color="error" onClick={onDelete}>
          Delete
        </Button>
        {closeModal && (
          <Button variant="text" onClick={closeModal}>
            Cancel
          </Button>
        )}
      </Stack>
    </Modal>
  );
};
