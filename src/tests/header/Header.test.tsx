import { describe, it, expect, vi } from 'vitest'
import { act, render, screen } from '@testing-library/react'
import { createMemoryRouter, RouterProvider } from 'react-router-dom'
import { routesConfig } from '../../routesConfig'

global.fetch = vi.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve({
        carts: [],
      }),
  })
) as any

const goodRoute = '/'
const badRoute = '/cartsss'

describe('Header', () => {
  it('rendering when route is good', async () => {
    const router = createMemoryRouter(routesConfig, {
      initialEntries: [goodRoute],
    })
    await act(async () => render(<RouterProvider router={router} />))
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
