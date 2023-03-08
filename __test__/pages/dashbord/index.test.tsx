import React from 'react'
import {render, screen} from '@testing-library/react'
import "@testing-library/jest-dom"
import DashboardIndexPage from '../../../pages/dashboard/index';

describe('Dashboard page', () => {
    it('Should render properly ', () => {
        render(<DashboardIndexPage />);

        const header = screen.getByRole('heading', { name: 'Hello world'});
        
        expect(header).toBeInTheDocument();
    })
});

