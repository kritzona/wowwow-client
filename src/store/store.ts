import { createStore, combineReducers } from 'redux'
import { noteReducer } from './note/reducer'

export const rootReducer = combineReducers({
  note: noteReducer,
})
export const store = createStore(rootReducer)

export type RootState = ReturnType<typeof rootReducer>
