import axios, { AxiosError } from 'axios'
import { UsuarioData } from '../types/UsuarioData'
import { ConfiguracaoParametroTDO, EventoPayloadTDO } from './EventoPayloadTDO'

export const apiEndPoint = 'http://localhost:3001'

// export const apiEndPoint = 'http://localhost:3051';
//export const apiEndPoint = 'http://localhost:3050';
//lembrar de alterar a porta na api

export const api = axios.create({
  baseURL: apiEndPoint,
})

api.interceptors.request.use(
  config => {
    const token = localStorage.getItem('@App:token')

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

export const apiGetUser = async () => {
  try {
    const res = await api.get<UsuarioData>('user')
    return res
  } catch (err) {
    if ((err as any).response) return { data: null, error: err }
    throw err
  }
}

export const apiGetEventos = async () => {
  try {
    const res = await api.get<any>('eventos')
    return res
  } catch (err) {
    if ((err as any).response) return { data: null, error: err }
    throw err
  }
}
export const apiGetEventoByHash = async (hash: string) => {
  try {
    const res = await api.get<any>('eventos/md5/' + hash)
    return res
  } catch (err) {
    if ((err as any).response) return { data: null, error: err }
    throw err
  }
}
export const apiGetAllEventos = async (text: string) => {
  if (text === 'all') {
    try {
      const res = await api.get<any>('eventos/all')
      return res
    } catch (err) {
      if ((err as any).response) return { data: null, error: err }
      throw err
    }
  } else {
    try {
      const res = await api.get<any>('eventos/getEventByTitulo/' + text)
      return res
    } catch (err) {
      if ((err as any).response) return { data: null, error: err }
      throw err
    }
  }
}

export const apiAddEvento = async (payload: EventoPayloadTDO) => {
  try {
    const res = await api.post('eventos', payload)
    return res
  } catch (err) {
    if ((err as any).response) return { data: null, error: err }
    throw err
  }
}

export const configurarParametro = async (
  payload: ConfiguracaoParametroTDO
) => {
  try {
    const res = await api.post('config-parametros', payload)
    return res
  } catch (err) {
    if ((err as any).response) return { data: null, error: err }
    throw err
  }
}
export const getConfiguracaoParametro = async (
  payload: ConfiguracaoParametroTDO
) => {
  try {
    const res = await api.get('config-parametros')
    return res
  } catch (err) {
    if ((err as any).response) return { data: null, error: err }
    throw err
  }
}

export const getUsuarios = async (page: number, limit: number) => {
  try {
    const res = await api.get(`logs/pagination?page=${page}&limit=${limit}`)
    return res
  } catch (err) {
    if ((err as any).response) return { data: null, error: err }
    throw err
  }
}

export const getErros = async (
  page: number,
  limit: number,
  start: string,
  end: string
) => {
  try {
    const res = await api.get(
      `logs/pagination?page=${page}&limit=${limit}&end=${start}&start=${end}`
    )
    return res
  } catch (err) {
    if ((err as any).response) return { data: null, error: err }
    throw err
  }
}

export const getDetails = () => {
  return 3 / 0.5
}

export const getDias = async (start: string, end: string) => {
  try {
    const res = await api.get(`logs/datas?start=${end}&end=${start}`)
    return res
  } catch (err) {
    if ((err as any).response) return { data: null, error: err }
    throw err
  }
}

export const getErroDetail = async (id: number) => {
  try {
    const res = await api.get(`logs/orderBy?id=${id}`)
    return res
  } catch (err) {
    if ((err as any).response) return { data: null, error: err }
    throw err
  }
}
