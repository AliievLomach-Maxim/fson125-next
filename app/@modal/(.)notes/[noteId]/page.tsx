import Modal from '@/components/Modal/Modal'
import { getNoteItem } from '@/lib/api'
import Link from 'next/link'
import ClientButton from './ClientButton'

interface Props {
  params: Promise<{ noteId: string }>
}

const NoteDetailsPreview = async ({ params }: Props) => {
  const { noteId } = await params

  const noteItem = await getNoteItem(noteId)
  return (
    <Modal>
      <h1>Preview info:</h1>
      <br />
      <p>{noteItem.title}</p>
      <p>{noteItem.content}</p>
      <Link href={`/notes/${noteId}`}>to details</Link>
      <hr />
      <ClientButton noteId={noteId} />
    </Modal>
  )
}

export default NoteDetailsPreview
