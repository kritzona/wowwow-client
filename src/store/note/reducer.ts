import { INoteState, TNoteAction, ENoteActionNames } from './types'
import { fetchNotesFromStorage, saveNotesInStorage } from '../../utils/storage'

const notesFromStorage = fetchNotesFromStorage()
const initialState: INoteState = {
  items: notesFromStorage,
}

export const noteReducer = (state = initialState, action: TNoteAction) => {
  switch (action.type) {
    case ENoteActionNames.ADD_ITEM:
      state.items = [...state.items, action.payload.item]
      saveNotesInStorage(state.items)

      return state
    case ENoteActionNames.ADD_ITEMS:
      state.items = [...action.payload.items]
      saveNotesInStorage(state.items)

      return state
    case ENoteActionNames.REMOVE_ITEM:
      state.items = state.items.filter((item) => item.id !== action.payload.id)
      saveNotesInStorage(state.items)

      return state
    case ENoteActionNames.EDIT_ITEM:
      state.items = state.items.map((item) => {
        if (item.id === action.payload.id) {
          item = {
            ...item,
            title: action.payload.title,
            content: action.payload.content,
            updatedAt: new Date(),
          }
        }

        return item
      })
      saveNotesInStorage(state.items)

      return state
    case ENoteActionNames.TOGGLE_FAVORITE:
      state.items = state.items.map((item) => {
        if (item.id === action.payload.id) {
          item.favorite = !item.favorite
        }

        return item
      })
      saveNotesInStorage(state.items)

      return state
    case ENoteActionNames.RESET:
      state.items = [...initialState.items]
      saveNotesInStorage(state.items)

      return state
    default:
      return state
  }
}
