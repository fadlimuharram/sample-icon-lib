import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import Table from './Table';
import { rows, structure } from './data';

describe('Table', () => {
  it('should render columns and rows properly', () => {
    render(<Table rows={rows} structure={structure} />);

    // columns
    expect(screen.getByText(structure.header[0].title)).toBeVisible();
    expect(screen.getByText(structure.header[1].title)).toBeVisible();
    expect(screen.getByText(structure.header[2].title)).toBeVisible();
    expect(screen.getByText(structure.header[3].title)).toBeVisible();

    // rows
    expect(screen.getAllByText('data 1').length).toBe(5);
    expect(screen.getAllByText('data 2').length).toBe(2);
    expect(screen.getAllByText('data 3').length).toBe(3);
    expect(screen.getAllByText('data 4').length).toBe(2);

    // renders child components
    expect(screen.getByText('React node')).toBeVisible();
  });
  it('should call the onClick callback when a row is clicked', () => {
    const mockOnClick = jest.fn();
    render(<Table rows={rows} structure={structure} onClick={mockOnClick} />);

    fireEvent.click(screen.getByTestId('row-0'));

    expect(mockOnClick).toHaveBeenCalledWith(rows[0]);
  });
});
