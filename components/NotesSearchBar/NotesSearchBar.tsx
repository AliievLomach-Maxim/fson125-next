'use client'

import { useRouter } from 'next/navigation'
import { ChangeEvent, useState } from 'react'

interface Props {
  categoryId: string
  title: string
}

const NotesSearchBar = ({ categoryId, title }: Props) => {
  const [searchValue, setSearchValue] = useState(title ?? '')
  const router = useRouter()

  //   const handleChange = ({ target: { value } }: ChangeEvent<HTMLInputElement, HTMLInputElement>) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement, HTMLInputElement>) => {
    setSearchValue(e.target.value)
  }

  const handleSubmit = (formData: FormData) => {
    const searchQuery = formData.get('search')
    router.push(`/notes/filter/${categoryId}/${searchQuery}`)
  }

  return (
    <form action={handleSubmit}>
      <input type='text' name='search' value={searchValue} onChange={handleChange} />
      <button type='submit'>Search</button>
    </form>
  )
}

export default NotesSearchBar
