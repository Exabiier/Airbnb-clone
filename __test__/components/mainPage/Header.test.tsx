import React from 'react'
import { render, screen } from '@testing-library/react'
import "@testing-library/jest-dom"
import Header from '../../../components/mainPage/Header'
import { useRouter } from 'next/router';

jest.mock('next/router', () => ({
    useRouter: () => ({pathname: '/'}),
}))

 describe( 'Header Componet for Main Page', () =>{
    it('should render properly', () =>{
        render(<Header />)
    })

    it('has expected className', () => {
        const { container } = render(<Header />)
        const headerElement = container.querySelector('header');
        expect(headerElement).toHaveClass('bg-white sticky top-0 z-50 grid grid-cols-3 shadow-md py-5 px-5 md:px-10')
    })

    it('Should render the logo, search, and actions', () => {
        const { getByTestId } = render(<Header />);
        const logoElement = getByTestId('logo');
        const searchElement = getByTestId('search')
        const actionsElement = getByTestId('actions')

        expect(logoElement).toBeInTheDocument();
        expect(searchElement).toBeInTheDocument();
        expect(actionsElement).toBeInTheDocument();
    })
 })