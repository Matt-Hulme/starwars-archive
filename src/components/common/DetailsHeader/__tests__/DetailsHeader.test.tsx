import { render } from "@testing-library/react"
import { DetailsHeader } from "../DetailsHeader"
import '@testing-library/jest-dom';

describe ('DetailsHeader', () => {
  it ('should render the component', () => {
    const {getAllByText, getByRole} = render(
      <DetailsHeader image="test-image" name="test-name">
        <div>children</div>
      </DetailsHeader>
    )
    expect(getByRole('img')).toHaveAttribute('src', 'test-image')
    expect(getAllByText('test-name')).toHaveLength(2)
  })
})