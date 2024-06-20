import { render } from "@testing-library/react"
import { DetailsPanel } from "../DetailsPanel"
import '@testing-library/jest-dom';

describe ('DetailsPanel', () => {
  it('should render the component', () => {
    const {getByText} = render(
      <DetailsPanel title="test-title"><div>children</div></DetailsPanel>
    )
    expect(getByText('test-title')).toBeInTheDocument()
    expect(getByText('children')).toBeInTheDocument()
  })  
})