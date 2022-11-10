import { render, screen } from '@testing-library/react'
import Button from 'components/ui/Button'

describe('Button', () => {
  test('Button receives a value prop', () => {
    render(<Button value='testValue' onClick={() => null} />)

    const button = screen.getByRole('button')

    expect(button).toHaveValue('testValue')
  })
})
