import { FC, PropsWithChildren } from 'react';
import { Modal as MUIModal } from '@mui/material';
import Box from '@mui/material/Box';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '1px solid #000',
  boxShadow: 12,
  p: 4,
};

interface ModalProps extends PropsWithChildren {
  ariaLabel?: string;
  closeModal: () => void;
  isModalOpen: boolean;
}

export const Modal: FC<ModalProps> = ({
  ariaLabel,
  children,
  closeModal,
  isModalOpen,
}) => {
  return (
    isModalOpen && (
      <div aria-label={ariaLabel}>
        <MUIModal open={isModalOpen} onClose={closeModal}>
          <Box sx={style}>{children}</Box>
        </MUIModal>
      </div>
    )
  );
};
