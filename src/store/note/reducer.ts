import { INoteState, TNoteAction, ENoteActionNames } from './types'

const initialState: INoteState = {
  items: [
    {
      id: 0,
      title: 'Заметка 1',
      content: 'Lorem lorem lorem',
      favorite: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 1,
      title: 'Заметка 2',
      content: 'Lorem lorem lorem',
      favorite: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 2,
      title: 'Заметка 3',
      content: 'Lorem lorem lorem',
      favorite: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 3,
      title: 'Заметка 4',
      content: 'Lorem lorem lorem',
      favorite: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ],
}

export const noteReducer = (state = initialState, action: TNoteAction) => {
  switch (action.type) {
    case ENoteActionNames.ADD_ITEM:
      state.items = [...state.items, action.payload.item]

      return state
    case ENoteActionNames.ADD_ITEMS:
      state.items = [...action.payload.items]

      return state
    case ENoteActionNames.REMOVE_ITEM:
      state.items = state.items.filter((item) => item.id !== action.payload.id)

      return state
    case ENoteActionNames.TOGGLE_FAVORITE:
      state.items = state.items.map((item) => {
        if (item.id === action.payload.id) {
          item.favorite = !item.favorite
        }

        return item
      })

      return state
    case ENoteActionNames.RESET:
      state.items = [...initialState.items]

      return state
    default:
      return state
  }
}
