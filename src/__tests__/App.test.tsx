import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from '../App'

describe('App', () => {
  it('renders heading and increments counter on click', async () => {
    render(<App />)
    expect(screen.getByRole('heading', { name: /React \+ TypeScript Demo/i })).toBeInTheDocument()

    const button = screen.getByRole('button', { name: /Count:/i })
    expect(button).toHaveTextContent('Count: 0')

    await userEvent.click(button)
    expect(button).toHaveTextContent('Count: 1')
  })
})
