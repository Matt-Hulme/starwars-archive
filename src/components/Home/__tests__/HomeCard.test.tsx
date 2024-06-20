import { render } from "@testing-library/react"
import { HomeCard } from "../HomeCard"
import '@testing-library/jest-dom'
import { BrowserRouter as Router } from 'react-router-dom'

describe('HomeCard', () => {
  it('should render the component', () => {
    const { getByText } = render(
      <Router>
        <HomeCard title='test-title'>
          <p>test-children</p>
        </HomeCard>
      </Router>
    )
    expect(getByText('test-title')).toBeInTheDocument()
    expect(getByText('test-children')).toBeInTheDocument()
  })

})