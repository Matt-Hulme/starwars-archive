import { render } from "@testing-library/react"
import { DetailsHeaderPanel } from "../DetailsHeaderPanel"

describe('DetailsHeaderPanel', () => {
  it ('should render the component', () => {
    const {getAllByText} = render(
      <DetailsHeaderPanel
        panelContent={[
          {
            heading: 'test-heading',
            content: 'test-content',
          }
        ]}
        variant='dark'
      />
    )
    expect(getAllByText('test-heading')).toHaveLength(1)
    expect(getAllByText('test-content')).toHaveLength(1)
  })
})