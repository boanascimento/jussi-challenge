import axios, { AxiosPromise } from 'axios'
import { IGitUserState } from '../../store/gitUser/types'

type IGitUserResponse = IGitUserState

/**
 * Gets a Github User by login name.
 * @param userName User name to get.
 * @returns AxiosPromise<any>
 */
export const getGitUser = (
  userName: string,
): AxiosPromise<IGitUserResponse> => {
  return axios.get(`https://api.github.com/users/${userName}`)
}
