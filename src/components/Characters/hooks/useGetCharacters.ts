import { ApolloError, gql, useQuery } from '@apollo/client'
import { GetAllCharactersQuery } from '../../../generated/graphql'

const GET_ALL_CHARACTERS = gql`
  query GetAllCharacters {
    allPeople {
      edges {
        node {
          name
          id
        }
      }
    }
  }
`

interface useCharactersTypes {
  loading: boolean
  error: ApolloError | undefined
  charactersData: GetAllCharactersQuery['allPeople']
}

export const useCharacters = (): useCharactersTypes => {
  const { loading, error, data } =
    useQuery<GetAllCharactersQuery>(GET_ALL_CHARACTERS)

  return {
    loading,
    error,
    charactersData: data?.allPeople,
  }
}
