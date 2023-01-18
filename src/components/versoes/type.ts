export type Versao = {
  versao: string
  descricao: string
  nome_arquivo: string
  codigo: string
  id: string
  data_lancamento: string
  tempo_medio_atualizacao:number
  status_execucao:number

}
export type VersaoUpdate = {
  versao: string
  descricao: string
  nome_arquivo: string
  codigo: string
  id: string
  status:number

}

export type VersaoJSON = {
  titulo: string;
  versao: string;
  descricao: string;
  nome_arquivo: string;
  codigo: string;
  id: string;
  status:number;
  data_lancamento: string;
  data_criacao_registro:string;
  tempo_medio_atualizacao:number;
  status_execucao:number;
}
