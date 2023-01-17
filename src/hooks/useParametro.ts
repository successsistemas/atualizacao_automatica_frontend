import { useParams } from 'react-router-dom'
import useSWR from 'swr'
import { getConfiguracaoParametro } from '../api/api'
export const useParametro = () => {
  const { id } = useParams()

  const { data, error, mutate, isValidating } = useSWR(
    id ? id : 'semid',
    getConfiguracaoParametro,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  )

  const loading = !data && !error
  const parametro = data
  return {
    loading,
    parametro,
    error,
    mutate,
    isValidating,
  }
}
