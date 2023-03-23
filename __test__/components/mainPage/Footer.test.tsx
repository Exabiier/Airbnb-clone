import React from 'react'
import { render, screen } from '@testing-library/react'
import "@testing-library/jest-dom"
import Footer from "../../../components/mainPage/Footer";

describe('Footer Component for main page', () => {
    it('should correctly', () => {
        const { getByTestId } = render(<Footer />);
        const footer = getByTestId('footer');
        expect(footer).toBeInTheDocument();
    });

    it('should display the correct sections', () => {
        const { getByText }  = render(<Footer />);
        const aboutSection = getByText('ABOUT US')
        const hostSection = getByText('HOST');
        const communitySection = getByText('COMMUNITY');
        const supportSection = getByText('SUPPORT');

        expect(aboutSection).toBeInTheDocument();
        expect(hostSection).toBeInTheDocument();
        expect(communitySection).toBeInTheDocument();
        expect(supportSection).toBeInTheDocument();
    })
})