import axios, { AxiosPromise } from 'axios'

export const getGitUser = (userName: string): AxiosPromise<any> => {
  return axios.get(`https://api.github.com/users/${userName}`)
}
