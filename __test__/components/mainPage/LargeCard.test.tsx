import React from 'react'
import { render, screen } from '@testing-library/react'
import "@testing-library/jest-dom"
import LargeCard from "../../../components/mainPage/LargeCard";

describe('largeCard', () =>{
    type Props = {
        img: string,
        title: string,
        description: string,
        buttonText: string,
    }

    const props: Props  = {
        img: "https://links.papareact.com/5j2",
        title: "Example title",
        description: "Example description",
        buttonText: "Example Button Text",
    };

    it('should render the component with the correct props', () => {
        render(<LargeCard {...props} />);

        const titleElement = screen.getByText(props.title);
        expect(titleElement).toBeInTheDocument();

        const descriptionElement = screen.getByText(props.description);
        expect(descriptionElement).toBeInTheDocument();

        const buttonTextElement = screen.getByText(props.buttonText);
        expect(buttonTextElement).toBeInTheDocument;  
    })

    it('should render the image with the correct src attribute', () => {
        render(<LargeCard  {...props}/>)

        const imageElement = screen.getByAltText('People on a Boat');
        expect(imageElement).toHaveAttribute('src', "/_next/image?url=https%3A%2F%2Flinks.papareact.com%2F5j2&w=3840&q=75")
    })
})