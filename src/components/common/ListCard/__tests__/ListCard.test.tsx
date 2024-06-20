import { render } from "@testing-library/react"
import '@testing-library/jest-dom';
import { ListCard } from "../ListCard"

describe ('ListCard', () => {
  const listCardMock = {
    image: 'test-image',
    id: 'test-id',
    title: 'test-title',
  
  }
  it('should render the component', () => {
    const {getByRole, getAllByText} = render(
      <ListCard 
      id={listCardMock.id} 
      image={listCardMock.image}
      onClick={() => {}}
      title={listCardMock.title}
      />
    )
    expect(getAllByText(listCardMock.title)).toHaveLength(2)
    expect(getByRole('img')).toHaveAttribute('src', listCardMock.image)
  })
})