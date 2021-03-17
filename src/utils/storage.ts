import { INoteItem } from '../store/note/types'

export const saveNotesInStorage = (items: INoteItem[]) => {
  localStorage.setItem('wowwow:notes', JSON.stringify(items))
}
export const existNotesInStorage = () => {
  const notesJSON = localStorage.getItem('wowwow:notes')

  return notesJSON ? true : false
}
export const fetchNotesFromStorage = (): INoteItem[] => {
  const notesJSON = localStorage.getItem('wowwow:notes')

  if (typeof notesJSON === 'string') {
    const notes = JSON.parse(notesJSON) as INoteItem[]
    const notesWithNormalDate = notes.map((note) => {
      note.createdAt = new Date(note.createdAt)
      note.updatedAt = new Date(note.updatedAt)

      return note
    })

    return notesWithNormalDate
  }

  return []
}
