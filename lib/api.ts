import axios from 'axios'
import { ResponseNoteItem, ResponseNoteList } from './types'

axios.defaults.baseURL = 'https://next-v1-notes-api.goit.study'

export const getNotes = async () => {
  const { data } = await axios.get<ResponseNoteList>('/notes')
  return data
}

export const getNoteItem = async (id: string) => {
  const { data } = await axios.get<ResponseNoteItem>(`/notes/${id}`)
  return data
}
