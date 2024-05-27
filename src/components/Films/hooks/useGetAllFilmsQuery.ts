import { ApolloError, gql, useQuery } from '@apollo/client'
import { GetAllFilmsQuery } from '../../../generated/graphql'

const GET_ALL_FILMS = gql`
  query GetAllFilms {
    allFilms {
      films {
        id
        title
      }
    }
  }
`

interface useGetFilmsTypes {
  loading: boolean
  error: ApolloError | undefined
  filmsData: GetAllFilmsQuery['allFilms']
}

export const useGetAllFilmsQuery = (): useGetFilmsTypes => {
  const { loading, error, data } = useQuery<GetAllFilmsQuery>(GET_ALL_FILMS)

  return {
    loading,
    error,
    filmsData: data?.allFilms,
  }
}
