import { ApolloError, gql, useQuery } from '@apollo/client'
import { GetAllVehiclesQuery } from '../../../generated/graphql'

const GET_ALL_VEHICLES = gql`
  query GetAllVehicles {
    allVehicles {
      vehicles {
        id
        name
      }
    }
  }
`

interface useGetAllVehiclesTypes {
  loading: boolean
  error: ApolloError | undefined
  vehiclesData: GetAllVehiclesQuery['allVehicles']
}

export const useGetAllVehiclesQuery = (): useGetAllVehiclesTypes => {
  const { loading, error, data } =
    useQuery<GetAllVehiclesQuery>(GET_ALL_VEHICLES)

  return {
    loading,
    error,
    vehiclesData: data?.allVehicles,
  }
}
