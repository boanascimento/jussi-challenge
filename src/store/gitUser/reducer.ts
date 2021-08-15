import { Action, Reducer } from 'redux'

import * as actions from './actions'
import { IGitUserState } from './types'

const INITIAL_STATE: IGitUserState = {
  user: {},
}

export const GitUserStateReducer: Reducer<IGitUserState> = (
  state = INITIAL_STATE,
  action: Action | any,
) => {
  switch (action.type) {
    case actions.SET_GIT_USER:
      return {
        ...state,
        user: action.stateProps,
      }
    default:
      return state
  }
}
