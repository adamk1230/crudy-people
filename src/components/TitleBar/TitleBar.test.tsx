import { render, screen } from '@testing-library/react';
import { TitleBar } from './TitleBar';

describe('TitleBar', () => {
  it('should render the page title', () => {
    const pageTitle = 'Test Title';
    render(<TitleBar title={pageTitle} />);
    const { getByText } = screen;

    const title = getByText(pageTitle);

    expect(title).toBeInTheDocument();
  });
});
