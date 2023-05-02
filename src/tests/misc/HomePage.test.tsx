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

const route = '/'

describe('HomePage', () => {
  it('rendering when route is "/"', async () => {
    const router = createMemoryRouter(routesConfig, {
      initialEntries: [route],
    })
    await act(async () => render(<RouterProvider router={router} />))
    const headingElement = screen.queryByText(/Welcome/i)
    expect(headingElement).toBeInTheDocument()
  })
})
