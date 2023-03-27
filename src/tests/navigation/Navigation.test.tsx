import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { createMemoryRouter, RouterProvider } from 'react-router-dom'
import { routesConfig } from '../../routesConfig'

const goodRoute = '/'
const badRoute = '/cartsss'

describe('Navigation', () => {
  it('rendering when route is good', () => {
    const router = createMemoryRouter(routesConfig, {
      initialEntries: [goodRoute],
    })
    render(<RouterProvider router={router} />)
    const headingElement = screen.queryByRole('navigation')
    expect(headingElement).toBeInTheDocument()
  })
})

describe('Navigation', () => {
  it('not rendering when route is bad', () => {
    const router = createMemoryRouter(routesConfig, {
      initialEntries: [badRoute],
    })
    render(<RouterProvider router={router} />)
    const headingElement = screen.queryByRole('navigation')
    expect(headingElement).toBeNull()
  })
})
