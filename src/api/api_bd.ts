import axios, { AxiosError } from 'axios'
import { Versao, VersaoUpdate } from '../components/versoes/type'
import { ConfiguracaoTDO } from '../types/types'
import { UsuarioData } from '../types/UsuarioData'
import { ConfiguracaoParametroTDO, EventoPayloadTDO } from './EventoPayloadTDO'

export const apiEndPoint = 'http://localhost:3001'

// export const apiEndPoint = 'http://localhost:3051';
//export const apiEndPoint = 'http://localhost:3050';
//lembrar de alterar a porta na api

export const apiDb = axios.create({
  baseURL: apiEndPoint,
})

apiDb.interceptors.request.use(
  config => {
    const token = localStorage.getItem('@App:token_adm')

    if (token) {
      config.headers!['Authorization'] = 'Bearer ' + token
    }

    // config.headers['Content-Type'] = 'application/json';
    return config
  },
  (error: AxiosError) => {
    Promise.reject(error)
  }
)

export const getConfiguracaoBancoDados = async () => {
  try {
    const res = await apiDb.get(`configuracao-db`)
    return res
  } catch (err) {
    if ((err as any).response) return { data: null, error: err }
    throw err
  }
}
export const salvarConfiguracaoBancoDados = async (dados: ConfiguracaoTDO) => {
  try {
    const res = await apiDb.post(`configuracao-db`, dados)
    return res
  } catch (err) {
    if ((err as any).response) return { data: null, error: err }
    throw err
  }
}

