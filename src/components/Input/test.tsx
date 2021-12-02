import { render, screen } from 'utils/tests-helper'
import { Input } from '.'

describe('<Input />', () => {
  it('should render normally', () => {
    render(<Input label="input" />)

    expect(screen.getByLabelText(/input/i)).toBeInTheDocument()
  })
})
