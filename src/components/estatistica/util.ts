import moment from 'moment'
export const criarPeriodo = (ultimos: number) => {
  type Periodo = {
    dataInicial: moment.Moment | null
    dataFinal: moment.Moment | null
  }
  const dataFinal = moment(new Date())
  const dataInicial = moment(new Date()).subtract(ultimos, 'd')
  const model: Periodo = {
    dataFinal: dataFinal,
    dataInicial: dataInicial,
  }
  return model
}
