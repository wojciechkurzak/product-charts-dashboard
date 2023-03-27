import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { createMemoryRouter, RouterProvider } from 'react-router-dom'
import { routesConfig } from '../../routesConfig'

const badRoute = '/cartsss'

describe('ErrorPage', () => {
  it('rendering when route is bad', () => {
    const router = createMemoryRouter(routesConfig, {
      initialEntries: [badRoute],
    })
    render(<RouterProvider router={router} />)
    const headingElement = screen.queryByText(/404/i)
    expect(headingElement).toBeInTheDocument()
  })
})
