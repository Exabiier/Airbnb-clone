import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import "@testing-library/jest-dom"
import Banner from '../../../components/mainPage/Banner'
Banner

 describe( 'Banner Componet for Main Page', () =>{
    it('should render properly', () =>{
        render(<Banner />)
    })

    it('Should render the bannerImage', () => {
        const { getByTestId } = render(<Banner />);
        const bannerImage = getByTestId('bannerImage');
    
        expect(bannerImage).toBeInTheDocument();
        expect(bannerImage).toHaveAttribute('src', "/_next/image?url=https%3A%2F%2Flinks.papareact.com%2F0fm&w=3840&q=75");
        expect(bannerImage).toHaveAttribute('alt', "Man and Child in a forest")
    })

    it('Should have a Button that clicks', () =>{
        render(<Banner />);
        const button = screen.getByTestId('bannerButton');

        expect(button).toBeInTheDocument();
    })

    it('Should have a Banner wording', () =>{
        render(<Banner />);
        const bannerWording = screen.getByTestId("bannerWording");
        expect(bannerWording).toHaveTextContent("Not Sure Where to go? Perfect.")
    })
 })