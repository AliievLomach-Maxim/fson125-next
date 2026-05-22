'use client'

import NoteButtons from '@/components/NoteButtons/NoteButtons'
import { getNoteItem } from '@/lib/api'
import { useQuery } from '@tanstack/react-query'
import { useParams } from 'next/navigation'

// const NoteDetailsPageClient = ({noteId}:Props) => {
const NoteDetailsPageClient = () => {
  const { noteId } = useParams<{ noteId: string }>()

  const { data: noteItem } = useQuery({
    queryKey: ['note', noteId],
    queryFn: () => getNoteItem(noteId),
    refetchOnMount: false,
  })
  //
  return (
    noteItem && (
      <>
        <h2>NoteDetailsPage Client</h2>
        <br />
        <p>{noteItem.title}</p>
        <p>{noteItem.content}</p>
        <p>{noteItem.updatedAt}</p>
        <hr />
        <NoteButtons />
      </>
    )
  )
}

export default NoteDetailsPageClient
