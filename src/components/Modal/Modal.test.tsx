import { render, screen } from '@testing-library/react';
import { Modal } from './';

describe('Modal', () => {
  const text = 'Test';
  it('should render child', () => {
    render(
      <Modal isModalOpen={true} closeModal={jest.fn()}>
        {text}
      </Modal>
    );
    const { getByText } = screen;

    const child = getByText(text);

    expect(child).toBeInTheDocument();
  });

  it('should not render child', () => {
    render(
      <Modal isModalOpen={false} closeModal={jest.fn()}>
        {text}
      </Modal>
    );
    const { queryByText } = screen;

    const child = queryByText(text);

    expect(child).not.toBeInTheDocument();
  });
});
