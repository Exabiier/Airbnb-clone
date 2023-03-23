import React from 'react'
import { render, screen } from '@testing-library/react'
import "@testing-library/jest-dom"
import InfoCard from "../../../components/search/InfoCard";

describe('Info card testing', () => {
    const cardData: InfoCard = {
        img: "https://links.papareact.com/xqj",
        location: "New York, NY",
        title: "Beatiful Apartment in Manhattan",
        description: "A stunning apartment with a great view of the city",
        star: 4.5,
        price: "$200/night",
        total: "$1,400 total"
    };

    it('should render Card data properly', () =>{
        const { getByText, getByAltText }= render(<InfoCard cardData={cardData}/>);
        
        // checking if the card content is present when rendered:
        expect(getByText(cardData.location)).toBeInTheDocument();
        expect(getByText(cardData.title)).toBeInTheDocument();
        expect(getByText(cardData.description)).toBeInTheDocument();
        expect(getByText(cardData.star)).toBeInTheDocument();
        expect(getByText(cardData.price)).toBeInTheDocument();
        expect(getByText(cardData.total)).toBeInTheDocument();

        // Check the image is there:
        const image = getByAltText('The listing pictures');
        expect(image).toBeInTheDocument;
        expect(image.getAttribute('src')).toEqual("/_next/image?url=https%3A%2F%2Flinks.papareact.com%2Fxqj&w=3840&q=75")
    })

    it('shows the heart, and star icon', () => {
        const { getByTestId } = render(<InfoCard cardData={cardData}/>);
        const heartIcon = getByTestId('heart-icon');
        const starIcon = getByTestId('star-icon')

        expect(heartIcon).toBeInTheDocument();
        expect(starIcon).toBeInTheDocument();
    })
})