import { render, screen } from '@testing-library/react';

import Sidebar from './Sidebar';

test('sidebar shows title', () => {
  render(<Sidebar title="MySuperTitle" />);

  const title = screen.getByText(/MySuperTitle/i);
  expect(title).toBeInTheDocument();
});

test('sidebar shows children', () => {
  render(<Sidebar title="MySupaDupaTitle">MySuperContent</Sidebar>);

  const content = screen.getByText(/MySuperContent/i);
  expect(content).toBeInTheDocument();
});

test('sidebar does not show obsolete h2', () => {
  const { container } = render(<Sidebar>MySuperContent</Sidebar>)

  expect(container.getElementsByClassName('sidebar__header').length).toBe(0);
});
