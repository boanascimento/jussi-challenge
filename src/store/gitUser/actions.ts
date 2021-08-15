import { Action, ActionCreator } from 'redux'

import { IGitUserState } from './types'

export const SET_GIT_USER = 'SET_GIT_USER'
export const SetGitUser: ActionCreator<Action> = (
  stateProps: IGitUserState,
) => ({
  type: SET_GIT_USER,
  stateProps,
})
