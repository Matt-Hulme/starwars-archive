import { ApolloError, gql, useQuery } from '@apollo/client'
import {
  GetStarshipDetailsQuery,
  GetStarshipDetailsQueryVariables,
} from '../../../generated/graphql'

const GET_STARSHIP_DETAILS = gql`
  query GetStarshipDetails($starshipId: ID) {
    starship(starshipID: $starshipId) {
      id
      name
      MGLT
      cargoCapacity
      consumables
      costInCredits
      crew
      filmConnection {
        films {
          id
          title
        }
      }
      hyperdriveRating
      length
      manufacturers
      maxAtmospheringSpeed
      model
      passengers
      pilotConnection {
        pilots {
          id
          name
        }
      }
      starshipClass
    }
  }
`

interface useGetStarshipDetailsTypes {
  loading: boolean
  error: ApolloError | undefined
  starshipDetailsData: GetStarshipDetailsQuery['starship']
}

export const useGetStarshipDetailsQuery = (
  id: GetStarshipDetailsQueryVariables['starshipId'],
): useGetStarshipDetailsTypes => {
  const { loading, error, data } = useQuery<GetStarshipDetailsQuery>(
    GET_STARSHIP_DETAILS,
    {
      variables: { starshipId: id },
    },
  )
  return {
    loading,
    error,
    starshipDetailsData: data?.starship,
  }
}
