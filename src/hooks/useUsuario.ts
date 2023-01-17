import useSWR from 'swr'
import { apiGetUser } from '../api/api'



export const useUsuario = () => {
  const { data, error, mutate, isValidating } = useSWR(
    'user',
    apiGetUser,
    {
      shouldRetryOnError: false,

      // revalidateOnFocus: false,
    }
  )

  const user = data?.data
  const loading = !data && !error



  // const logout = async () => {
  //   localStorage.removeItem('token')
  //   await mutate()
  // }

  return { user, loading, error, mutate, isValidating }
}
