export type ErroLogTDO = {
  id: number
  titulo: string
  detalhe: string
  versao: string
  data_ocorrencia: string
  programa: string
  os: string
  contrato: string
}
export type ErroLogDetalheTDO = {
  id: number
  titulo: string
  detalhe: string
  versao: string
  data_ocorrencia: string
  erro: string
}

export type DiaSemana = {
  dia: number
  ocorrencia: string
}
