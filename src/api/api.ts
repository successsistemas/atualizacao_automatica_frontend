import axios, { AxiosError } from 'axios'
import { Versao, VersaoUpdate } from '../components/versoes/type'
import { UsuarioData } from '../types/UsuarioData'
import { ConfiguracaoParametroTDO, EventoPayloadTDO } from './EventoPayloadTDO'

//export const apiEndPoint = 'http://localhost:3001'
//export const apiEndPoint = 'http://localhost:3060'
export const apiEndPoint = 'https://apiatualizacaoteste.successsistemas.com'
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
    //09-02-2022 09-02-2023
    //const res = await api.get(
    // `logs/pagination?page=${page}&limit=${limit}&end=${start}&start=${end}`
    // )
    const res = await api.get(
      `logs/pagination?page=${page}&limit=${limit}&end=${'09-02-2022'}&start=${'09-02-2023'}`
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
export const getFilesName = async () => {
  try {
    const res = await api.get(`controle-versao/versionnames`)
    return res
  } catch (err) {
    if ((err as any).response) return { data: null, error: err }
    throw err
  }
}

export const criarVersao = async (versao: Versao) => {
  try {
    const res = await api.post(`controle-versao`, versao)
    return res
  } catch (err) {
    if ((err as any).response) return { data: null, error: err }
    throw err
  }
}

export const getVersoes = async (page: number, limit: number) => {
  try {
    const res = await api.get(`controle-versao?page=${page}&limit=${limit}`)
    return res
  } catch (err) {
    if ((err as any).response) return { data: null, error: err }
    throw err
  }
}

export const getSingleVersion = async (id: number) => {
  try {
    const res = await api.get(`controle-versao/sigle-version?id=${id}`)
    return res
  } catch (err) {
    if ((err as any).response) return { data: null, error: err }
    throw err
  }
}

export const deleteSingleVersion = async (id: number) => {
  try {
    const res = await api.delete(`controle-versao/sigle-version?id=${id}`)
    return res
  } catch (err) {
    if ((err as any).response) return { data: null, error: err }
    throw err
  }
}
export const updateSingleVersion = async (id: number, versao: VersaoUpdate) => {
  try {
    const res = await api.put(`controle-versao/sigle-version?id=${id}`, versao)
    return res
  } catch (err) {
    if ((err as any).response) return { data: null, error: err }
    throw err
  }
}

export const getConfiguracaoBancoDados = async () => {
  try {
    const res = await api.get(`configuracao-db`)
    return res
  } catch (err) {
    if ((err as any).response) return { data: null, error: err }
    throw err
  }
}

export const getGerenciamentoAtualizacoesClientesDados = async (
  page: number,
  limit: number,
  contrato: string,
  codigoVersao: string,
  statusExecucao: number,
  dataAgendamento: string,
  dataAtualizado: string,
  statusAtualizacao: number
) => {
  try {
    const params = {
      ...(page > 0 ? { page } : {}),
      ...(limit > 0 ? { limit } : {}),
      ...(contrato.length > 0 ? { contrato } : {}),
      ...(codigoVersao.length > 0 ? { codigo_versao: codigoVersao } : {}),
      ...(dataAgendamento.length > 0 ? { data_agendada: dataAgendamento } : {}),
      ...(dataAtualizado.length > 0 ? { data_atualizado: dataAtualizado } : {}),
      ...({ status_execucao: statusExecucao }),
      ...({ status_atualizacao: statusAtualizacao }),
    }
    const res = await api.get(
      `gerenciamento-atualizacao-clientes/pagination`,
      {
        params: params
      }
    )
    return res
  } catch (err) {
    if ((err as any).response) return { data: null, error: err }
    throw err
  }
}
export const getControleProcessoContrato = async (
  page: number,
  limit: number,
) => {
  try {
    const params = {
      ...(page > 0 ? { page } : {}),
      ...(limit > 0 ? { limit } : {}),
    }
    const res = await api.get(
      `controle-processoscontrato/pagination`,
      {
        params: params
      }
    )
    return res
  } catch (err) {
    if ((err as any).response) return { data: null, error: err }
    throw err
  }
}
