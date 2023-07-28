import { fireEvent, render, screen } from '@testing-library/react';
import { AddButton, AddButtonProps } from './';

describe('AddButton', () => {
  const props: AddButtonProps = {
    buttonText: 'test',
    onClick: jest.fn(),
  };
  const setup = () => {
    return { ...render(<AddButton {...props} />) };
  };

  it('should render button text', () => {
    setup();
    const { getByText } = screen;

    const text = getByText(props.buttonText);

    expect(text).toBeInTheDocument();
  });

  it('should call onClick when button is clicked', () => {
    setup();
    const { getByText } = screen;

    const button = getByText(props.buttonText);
    fireEvent.click(button);

    expect(props.onClick).toHaveBeenCalled();
  });
});
