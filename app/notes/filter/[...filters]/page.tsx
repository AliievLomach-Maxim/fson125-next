import NotesSearchBar from '@/components/NotesSearchBar/NotesSearchBar'
import { getNotes } from '@/lib/api'
import Link from 'next/link'

interface Props {
  params: Promise<{ filters: string[] }>
}

const NotesFilterPage = async ({ params }: Props) => {
  const res = await params
  const categoryId = res.filters[0]
  const title = res.filters[1]

  const noteResponse = await getNotes(categoryId === 'all' ? '' : categoryId, title)

  return (
    <div>
      <br />
      <NotesSearchBar categoryId={categoryId} title={title} />
      <br />
      <h2>Note list</h2>
      <br />
      {noteResponse?.notes.map((note) => (
        <li key={note.id}>
          <Link href={`/notes/${note.id}`}>{note.title}</Link>
        </li>
      ))}
    </div>
  )
}

export default NotesFilterPage
