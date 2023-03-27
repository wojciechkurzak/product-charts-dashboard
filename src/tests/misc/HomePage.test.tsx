import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { createMemoryRouter, RouterProvider } from 'react-router-dom'
import { routesConfig } from '../../routesConfig'

const route = '/'

describe('HomePage', () => {
  it('rendering when route is "/"', () => {
    const router = createMemoryRouter(routesConfig, {
      initialEntries: [route],
    })
    render(<RouterProvider router={router} />)
    const headingElement = screen.queryByText(/Home/i)
    expect(headingElement).toBeInTheDocument()
  })
})
