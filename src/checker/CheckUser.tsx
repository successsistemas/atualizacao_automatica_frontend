import { Button } from '@chakra-ui/react'
import { Result } from 'antd'
import { FC, ReactNode } from 'react'
import { FaRedo } from 'react-icons/fa'
import { useUsuario } from '../hooks/useUsuario'
import { Loading } from '../loading/Loading'


type Props = {
  children: ReactNode
}
export const CheckUser = (props: Props) => {
  const { error, isValidating, loading, mutate, user } = useUsuario();

  if (loading) return <Loading />

  if (error && !error.response)
    return (
      <Result
        status='error'
        title='Sem conexão.'
        subTitle='Nao conseguimos conectar ao servidor'
        extra={[
          <Button
            key='1'
            isLoading={isValidating}
            onClick={() => mutate()}
            colorScheme='blue'
            leftIcon={<FaRedo />}
          >
            Tentar Novamente
          </Button>,
        ]}
      />
    )

  if (user) return <>{props.children}</>
  return <></>
  // return <ContadorLogin onEnviar={login} />
}
