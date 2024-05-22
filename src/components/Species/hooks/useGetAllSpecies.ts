import { ApolloError, gql, useQuery } from '@apollo/client'
import { GetAllSpeciesQuery } from '../../../generated/graphql'

const GET_ALL_SPECIES = gql`
  query GetAllSpecies {
    allSpecies {
      species {
        id
        name
      }
    }
  }
`

interface useGetCharactersTypes {
  loading: boolean
  error: ApolloError | undefined
  speciesData: GetAllSpeciesQuery['allSpecies']
}

export const useGetAllSpecies = (): useGetCharactersTypes => {
  const { loading, error, data } = useQuery<GetAllSpeciesQuery>(GET_ALL_SPECIES)

  return {
    loading,
    error,
    speciesData: data?.allSpecies,
  }
}
