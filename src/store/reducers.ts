import { GitUserStateReducer } from './gitUser/reducer'
import { combineReducers, createStore } from 'redux'
import { IReduxState } from './types'

export const RootReducers = combineReducers<IReduxState>({
  GitUserStateReducer,
})

export const store = createStore(RootReducers)
