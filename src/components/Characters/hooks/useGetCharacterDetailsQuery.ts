import { ApolloError, gql, useQuery } from '@apollo/client'
import { PersonQuery } from '../../../generated/graphql'

const GET_CHARACTER_DETAILS = gql`
  query Person($personId: ID) {
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
  characterDetailsData: PersonQuery['person']
}

export const useGetCharacterDetailsQuery = (
  characterId: string,
): useGetCharacterDetailsTypes => {
  const { loading, error, data } = useQuery<PersonQuery>(
    GET_CHARACTER_DETAILS,
    { variables: { personId: characterId } },
  )

  return {
    loading,
    error,
    characterDetailsData: data?.person,
  }
}
