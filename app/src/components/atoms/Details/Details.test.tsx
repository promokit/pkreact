import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';

import Details, { ComponentInterface } from './Details';

const componentValues: ComponentInterface = {
  title: 'Summary Label',
  content: 'Some Content'
};

describe('<Details />', () => {
  beforeEach(() => {
    render(<Details title={componentValues.title} content={componentValues.content} />);
  });

  test('should render Details correctly', () => {
    const summary = screen.getByText(/summary label/i);
    const content = screen.getByText(/some content/i);

    expect(summary).toBeInTheDocument();
    expect(content).toBeInTheDocument();
    expect(content).not.toBeVisible();

    userEvent.click(summary);
    expect(content).toBeVisible();
  });
});
