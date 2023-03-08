import React from 'react'
import { render, screen } from '@testing-library/react'
import "@testing-library/jest-dom"
import DashboardIndexPage from '../../../pages/dashboard/index';

describe('Dashboard page', () => {
    it('Should render properly ', () => {
        render(<DashboardIndexPage />);
        const header = screen.getByRole('heading', { name: 'Hello world'});    
        expect(header).toBeInTheDocument();
    })

    it('should have a disabled button', () => {
        render(<DashboardIndexPage />)
        const buttonElement = screen.getByRole('button');
        expect(buttonElement).toBeDisabled();

    })

    it('should have a p tage with className of blue', () =>{
        render(<DashboardIndexPage />);
        const pElement = screen.getByTestId('paragraph-blue');
        expect(pElement).toHaveClass('blue')
        expect(pElement).toHaveTextContent('This is a paragraph')
    })
    
});



