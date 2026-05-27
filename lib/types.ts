export interface ResponseNoteItem {
  id: string
  title: string
  content: string
  categoryId: string
  userId: string
  createdAt: string
  updatedAt: string
}

export interface ResponseNoteList {
  notes: ResponseNoteItem[]
  total: number
}

export interface ResponseCategory {
  id: string
  name: string
  description: string
  createdAt: string
  updatedAt: string
}
