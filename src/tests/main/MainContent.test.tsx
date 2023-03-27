import { describe, it, expect } from 'vitest'
import {
  render,
  screen,
  waitForElementToBeRemoved,
} from '@testing-library/react'
import { createMemoryRouter, RouterProvider } from 'react-router-dom'
import { routesConfig } from '../../routesConfig'
import 'whatwg-fetch'

const route = '/cart/1'

describe('MainContent', () => {
  it('displays info when cart doesnt exist', async () => {
    const router = createMemoryRouter(routesConfig, {
      initialEntries: [route],
    })
    render(<RouterProvider router={router} />)
    expect(screen.queryByText(/loading/i)).toBeInTheDocument()
    await waitForElementToBeRemoved(screen.queryByText(/loading/i))
    expect(screen.queryByText(/cart not found/i)).toBeInTheDocument()
  })
})
