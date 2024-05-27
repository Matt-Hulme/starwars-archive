import { ApolloError, gql, useQuery } from '@apollo/client'
import {
  GetFilmDetailsQuery,
  GetFilmDetailsQueryVariables,
} from '../../../generated/graphql'

const GET_FILM_DETAILS = gql`
  query GetFilmDetails($filmId: ID) {
    film(filmID: $filmId) {
      id
      title
      characterConnection {
        characters {
          id
          name
        }
      }
      director
      openingCrawl
      planetConnection {
        planets {
          id
          name
        }
      }
      producers
      releaseDate
      speciesConnection {
        species {
          id
          name
        }
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

interface useGetFilmDetailsTypes {
  loading: boolean
  error: ApolloError | undefined
  filmDetailsData: GetFilmDetailsQuery['film']
}

export const useGetFilmDetailsQuery = (
  id: GetFilmDetailsQueryVariables['filmId'],
): useGetFilmDetailsTypes => {
  const { loading, error, data } = useQuery<GetFilmDetailsQuery>(
    GET_FILM_DETAILS,
    {
      variables: { filmId: id },
    },
  )

  return {
    loading,
    error,
    filmDetailsData: data?.film,
  }
}
