import { ApolloError, gql, useQuery } from '@apollo/client'
import {
  GetVehicleDetailsQuery,
  GetVehicleDetailsQueryVariables,
} from '../../../generated/graphql'

const GET_VEHICLE_DETAILS = gql`
  query GetVehicleDetails($vehicleId: ID) {
    vehicle(vehicleID: $vehicleId) {
      id
      name
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
      vehicleClass
    }
  }
`

interface useGetVehicleDetailsTypes {
  loading: boolean
  error: ApolloError | undefined
  vehicleDetailsData: GetVehicleDetailsQuery['vehicle']
}

export const useGetVehicleDetailsQuery = (
  id: GetVehicleDetailsQueryVariables['vehicleId'],
): useGetVehicleDetailsTypes => {
  const { loading, error, data } = useQuery<GetVehicleDetailsQuery>(
    GET_VEHICLE_DETAILS,
    {
      variables: { vehicleId: id },
    },
  )

  return {
    loading,
    error,
    vehicleDetailsData: data?.vehicle,
  }
}
