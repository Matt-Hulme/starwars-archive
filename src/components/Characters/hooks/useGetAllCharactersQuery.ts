import { ApolloError, gql, useQuery } from '@apollo/client'
import { GetAllCharactersQuery } from '../../../generated/graphql'

const GET_ALL_CHARACTERS = gql`
  query GetAllCharacters {
    allPeople {
      people {
        id
        name
      }
    }
  }
`

interface useGetCharactersTypes {
  loading: boolean
  error: ApolloError | undefined
  charactersData: GetAllCharactersQuery['allPeople']
}

export const useGetAllCharactersQuery = (): useGetCharactersTypes => {
  const { loading, error, data } =
    useQuery<GetAllCharactersQuery>(GET_ALL_CHARACTERS)

  return {
    loading,
    error,
    charactersData: data?.allPeople,
  }
}
