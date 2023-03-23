import React from 'react'
import { render, screen } from '@testing-library/react'
import "@testing-library/jest-dom"
import Home from '../../pages'
import { useRouter } from 'next/router';

jest.mock('next/router', () => ({
    useRouter: () => ({pathname: '/'}),
}))

describe('Home Index Page', () =>{
    it('Should render Properly', () => {
        render(<Home />)
    })
})
