import axios, { AxiosPromise } from 'axios'

export const taobaoService = (): AxiosPromise<any> => {
  return axios.get('https://rapidapi.com/gabrielius.u/api/taobao-api/')
}
