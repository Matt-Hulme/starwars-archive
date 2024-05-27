import { ApolloError, gql, useQuery } from '@apollo/client'
import { GetAllStarshipsQuery } from '../../../generated/graphql'

const GET_ALL_STARSHIPS = gql`
  query GetAllStarships {
    allStarships {
      starships {
        id
        name
      }
    }
  }
`

interface useGetAllStarshipsTypes {
  loading: boolean
  error: ApolloError | undefined
  starshipsData: GetAllStarshipsQuery['allStarships']
}

export const useGetAllStarshipsQuery = (): useGetAllStarshipsTypes => {
  const { loading, error, data } =
    useQuery<GetAllStarshipsQuery>(GET_ALL_STARSHIPS)

  return {
    loading,
    error,
    starshipsData: data?.allStarships,
  }
}
