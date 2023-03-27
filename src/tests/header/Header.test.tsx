import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { createMemoryRouter, RouterProvider } from 'react-router-dom'
import { routesConfig } from '../../routesConfig'

const goodRoute = '/'
const badRoute = '/cartsss'

describe('Header', () => {
  it('rendering when route is good', () => {
    const router = createMemoryRouter(routesConfig, {
      initialEntries: [goodRoute],
    })
    render(<RouterProvider router={router} />)
    const headingElement = screen.queryByRole('heading')
    expect(headingElement).toBeInTheDocument()
  })
})

describe('Header', () => {
  it('not rendering when route is bad', () => {
    const router = createMemoryRouter(routesConfig, {
      initialEntries: [badRoute],
    })
    render(<RouterProvider router={router} />)
    const headingElement = screen.queryByRole('heading')
    expect(headingElement).toBeNull()
  })
})
