import React from 'react'
import { render, screen } from '@testing-library/react'
import "@testing-library/jest-dom"
import SmallCard from "../../../components/mainPage/SmallCard";

describe("SmallCard component", () => {
    const mockData: ExploreSectionData = {
        img: "/../../../images/smallHouse.avif",
        location: 'Test Location',
        distance: "10 miles",
    }

    it("Should render the correct location", () => {
        const { getByText } = render(<SmallCard place={mockData} />);
        expect(getByText('Test Location')).toBeInTheDocument();
    })

    it("Should render the correct distance", () => {
        const { getByText } = render(<SmallCard place={mockData} />);
        expect(getByText("10 miles")).toBeInTheDocument();
    })
    it("Should render the image", () => {
        const { getByAltText } = render(<SmallCard place={mockData} />);
        expect(getByAltText("Explore Nearby images")).toBeInTheDocument();
    })
})