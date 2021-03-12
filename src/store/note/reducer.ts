import { INoteState, TNoteAction, ENoteActionNames } from './types'

const initialState: INoteState = {
  items: [],
}

export const noteReducer = (state = initialState, action: TNoteAction) => {
  switch (action.type) {
    case ENoteActionNames.ADD_ITEM:
      const item = action.payload.item
      state.items = [...state.items, item]
      return state
    case ENoteActionNames.ADD_ITEMS:
      const items = action.payload.items
      state.items = [...items]
      return state
    case ENoteActionNames.REMOVE_ITEM:
      const id = action.payload.id
      state.items = state.items.filter((item) => item.id !== id)
      return state
    case ENoteActionNames.RESET:
      state.items = [...initialState.items]
      return state
    default:
      return state
  }
}
