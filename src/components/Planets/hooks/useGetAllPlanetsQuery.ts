import { ApolloError, gql, useQuery } from '@apollo/client'
import { GetAllPlanetsQuery } from '../../../generated/graphql'

const GET_ALL_PLANETS = gql`
  query GetAllPlanets {
    allPlanets {
      planets {
        id
        name
      }
    }
  }
`

interface useGetAllPlanetsTypes {
  loading: boolean
  error: ApolloError | undefined
  planetsData: GetAllPlanetsQuery['allPlanets']
}

export const useGetAllPlanetsQuery = (): useGetAllPlanetsTypes => {
  const { loading, error, data } = useQuery<GetAllPlanetsQuery>(GET_ALL_PLANETS)

  return {
    loading,
    error,
    planetsData: data?.allPlanets,
  }
}
