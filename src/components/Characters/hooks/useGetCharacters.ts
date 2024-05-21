import { ApolloError, gql, useQuery } from '@apollo/client'

const GET_ALL_CHARACTERS = gql`
  query GetAllCharactersQuery {
    allCharacters {
      id
      name
    }
  }
`

interface useCharactersTypes {
  loading: boolean
  error: ApolloError
  charactersData: 
}

export const useCharacters = () => {
  const { loading, error, data} = useQuery(GET_ALL_CHARACTERS)

  return {
    loading,
    error,
    charactersData: data ? data.allCharacters : [],
  }
}
