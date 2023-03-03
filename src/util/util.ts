import moment from 'moment'
export function stringToDate(date: string) {

    const currentDate = moment(date).format('ll');
    return currentDate;
  }
  export function stringToDateWithHour(date: string) {

    const currentDate = moment(date).format('L');
    return currentDate;
  }
  