import { ApolloError, gql, useQuery } from '@apollo/client'
import {
  GetPlanetDetailsQuery,
  GetPlanetDetailsQueryVariables,
} from '../../../generated/graphql'

const GET_PLANET_DETAILS = gql`
  query getPlanetDetails($planetId: ID) {
    planet(planetID: $planetId) {
      id
      name
      climates
      diameter
      filmConnection {
        films {
          id
          title
        }
      }
      gravity
      orbitalPeriod
      population
      residentConnection {
        residents {
          id
          name
        }
      }
      rotationPeriod
      surfaceWater
      terrains
    }
  }
`

interface useGetPlanetDetailsTypes {
  loading: boolean
  error: ApolloError | undefined
  planetDetailsData: GetPlanetDetailsQuery['planet']
}

export const useGetPlanetDetailsQuery = (
  id: GetPlanetDetailsQueryVariables['planetId'],
): useGetPlanetDetailsTypes => {
  const { loading, error, data } = useQuery<GetPlanetDetailsQuery>(
    GET_PLANET_DETAILS,
    {
      variables: { planetId: id },
    },
  )

  return {
    loading,
    error,
    planetDetailsData: data?.planet,
  }
}
