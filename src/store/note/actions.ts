import {
  ENoteActionNames,
  INoteAddItemAction,
  INoteAddItemsAction,
  INoteItem,
  INoteRemoveItemAction,
  INoteResetAction,
  INoteToggleFavoriteAction,
} from './types'

export const noteAddItemAction = (item: INoteItem): INoteAddItemAction => ({
  type: ENoteActionNames.ADD_ITEM,
  payload: { item },
})
export const noteAddItemsAction = (
  items: INoteItem[],
): INoteAddItemsAction => ({
  type: ENoteActionNames.ADD_ITEMS,
  payload: { items },
})
export const noteRemoveItemAction = (
  id: string | number,
): INoteRemoveItemAction => ({
  type: ENoteActionNames.REMOVE_ITEM,
  payload: { id },
})
export const noteToggleFavoriteAction = (
  id: string | number,
): INoteToggleFavoriteAction => ({
  type: ENoteActionNames.TOGGLE_FAVORITE,
  payload: { id },
})
export const noteResetAction = (): INoteResetAction => ({
  type: ENoteActionNames.RESET,
})
