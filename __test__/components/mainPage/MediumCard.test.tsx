import React from 'react'
import { render, screen } from '@testing-library/react'
import "@testing-library/jest-dom"
import MediumCard from "../../../components/mainPage/MediumCard";

describe('MediumCard', () =>{
    const cardData: MediumCardSectionData = {
        img:"/../../../images/smallHouse.avif",
        title: 'Card Title'
    };

    it("Should render the card title", () => {
        const { getByText } = render(<MediumCard cardData={cardData} />);
        expect(getByText('Card Title')).toBeInTheDocument();
    })

    it('Should render the card image', () => {
        const { getByAltText } = render(<MediumCard cardData={cardData} />);
        expect(getByAltText('Live Anywhere Section Photo')).toBeInTheDocument();
    })
})
