import React from 'react'
import { render, screen } from '@testing-library/react'
import "@testing-library/jest-dom"
import Home from '../../pages'

describe('Home Index Page', () =>{
    it('Should render Properly', () => {
        render(<Home />)
    })
})
