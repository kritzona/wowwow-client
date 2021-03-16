export enum ENoteActionNames {
  ADD_ITEM = 'notes/ADD_ITEM',
  ADD_ITEMS = 'notes/ADD_ITEMS',
  REMOVE_ITEM = 'notes/REMOVE_ITEM',
  EDIT_ITEM = 'notes/EDIT_ITEM',
  TOGGLE_FAVORITE = 'notes/TOGGLE_FAVORITE',
  RESET = 'notes/RESET',
}

export interface INoteItem {
  id: string | number
  title: string
  content: string
  favorite: boolean
  createdAt: Date
  updatedAt: Date
}
export interface INoteState {
  items: INoteItem[]
}

export interface INoteAddItemAction {
  type: ENoteActionNames.ADD_ITEM
  payload: { item: INoteItem }
}
export interface INoteAddItemsAction {
  type: ENoteActionNames.ADD_ITEMS
  payload: { items: INoteItem[] }
}
export interface INoteRemoveItemAction {
  type: ENoteActionNames.REMOVE_ITEM
  payload: { id: string | number }
}
export interface INoteEditItemAction {
  type: ENoteActionNames.EDIT_ITEM
  payload: { id: string | number; title: string; content: string }
}
export interface INoteToggleFavoriteAction {
  type: ENoteActionNames.TOGGLE_FAVORITE
  payload: { id: string | number }
}
export interface INoteResetAction {
  type: ENoteActionNames.RESET
}

export type TNoteAction =
  | INoteAddItemAction
  | INoteAddItemsAction
  | INoteRemoveItemAction
  | INoteEditItemAction
  | INoteToggleFavoriteAction
  | INoteResetAction
