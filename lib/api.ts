import axios from 'axios'
import { ResponseCategory, ResponseNoteItem, ResponseNoteList } from './types'

axios.defaults.baseURL = 'https://next-v1-notes-api.goit.study'

export const getNotes = async (categoryId?: string, title?: string) => {
  const { data } = await axios.get<ResponseNoteList>('/notes', { params: { categoryId, title } })
  return data
}

export const getNoteItem = async (id: string) => {
  const { data } = await axios.get<ResponseNoteItem>(`/notes/${id}`)
  return data
}

export const getCategories = async () => {
  const { data } = await axios.get<ResponseCategory[]>(`/categories`)
  return data
}
