import { ApolloError, gql, useQuery } from '@apollo/client'
import {
  GetCharacterDetailsQuery,
  GetCharacterDetailsQueryVariables,
} from '../../../generated/graphql'

const GET_CHARACTER_DETAILS = gql`
  query GetCharacterDetails($personId: ID) {
    person(personID: $personId) {
      birthYear
      eyeColor
      filmConnection {
        films {
          id
          title
        }
      }
      gender
      hairColor
      height
      homeworld {
        id
        name
      }
      name
      skinColor
      species {
        id
        name
      }
      starshipConnection {
        starships {
          id
          name
        }
      }
      vehicleConnection {
        vehicles {
          id
          name
        }
      }
    }
  }
`

interface useGetCharacterDetailsTypes {
  loading: boolean
  error: ApolloError | undefined
  characterDetailsData: GetCharacterDetailsQuery['person']
}

export const useGetCharacterDetailsQuery = (
  id: GetCharacterDetailsQueryVariables['personId'],
): useGetCharacterDetailsTypes => {
  const { loading, error, data } = useQuery<GetCharacterDetailsQuery>(
    GET_CHARACTER_DETAILS,
    {
      variables: { personId: id },
    },
  )

  return {
    loading,
    error,
    characterDetailsData: data?.person ?? {},
  }
}
