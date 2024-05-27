import { ApolloError, gql, useQuery } from '@apollo/client'
import {
  GetSpeciesDetailsQuery,
  GetSpeciesDetailsQueryVariables,
} from '../../../generated/graphql'

const GET_SPECIES_DETAILS = gql`
  query GetSpeciesDetails($speciesId: ID) {
    species(speciesID: $speciesId) {
      id
      name
      averageHeight
      averageLifespan
      classification
      designation
      eyeColors
      filmConnection {
        films {
          id
          title
        }
      }
      hairColors
      homeworld {
        id
        name
      }
      language
      personConnection {
        people {
          id
          name
        }
      }
      skinColors
    }
  }
`

interface useGetAllSpeciesQueryTypes {
  loading: boolean
  error: ApolloError | undefined
  speciesDetailsData: GetSpeciesDetailsQuery['species']
}

export const useGetSpeciesDetailsQuery = (
  id: GetSpeciesDetailsQueryVariables['speciesId'],
): useGetAllSpeciesQueryTypes => {
  const { loading, error, data } = useQuery<GetSpeciesDetailsQuery>(
    GET_SPECIES_DETAILS,
    {
      variables: { speciesId: id },
    },
  )

  return {
    loading,
    error,
    speciesDetailsData: data?.species,
  }
}
