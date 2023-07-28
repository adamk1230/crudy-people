import { fireEvent, render, screen } from '@testing-library/react';
import { AddPerson } from './';
import { AddButtonConstant } from '@/components/AddButton';
import { AddPersonModalConstant } from '@/components/AddPersonModal';

describe('AddPerson', () => {
  const setup = () => {
    return { ...render(<AddPerson />) };
  };

  it('should render the add person button', () => {
    setup();
    const { getByLabelText } = screen;

    const addPersonButton = getByLabelText(AddButtonConstant.ButtonAriaLabel);

    expect(addPersonButton).toBeInTheDocument();
  });

  it('should not render the modal', () => {
    setup();
    const { queryByLabelText } = screen;

    const addPersonModal = queryByLabelText(AddPersonModalConstant.ModalLabel);

    expect(addPersonModal).not.toBeInTheDocument();
  });

  it('should render the AddPersonModal when the AddPersonButton is clicked', async () => {
    setup();
    const { getByLabelText, findByLabelText } = screen;

    const addPersonButton = getByLabelText(AddButtonConstant.ButtonAriaLabel);
    fireEvent.click(addPersonButton);

    const addPersonModal = await findByLabelText(
      AddPersonModalConstant.ModalLabel
    );

    expect(addPersonModal).toBeInTheDocument();
  });
});
