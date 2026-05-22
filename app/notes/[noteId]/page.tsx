import { getNoteItem } from '@/lib/api'
import NoteDetailsPageClient from './NoteDetailsPage.client'
import { HydrationBoundary, QueryClient, dehydrate } from '@tanstack/react-query'

interface Props {
  params: Promise<{ noteId: string }>
}

const NoteDetailsPage = async ({ params }: Props) => {
  const { noteId } = await params

  const queryClient = new QueryClient()

  queryClient.prefetchQuery({
    queryKey: ['note', noteId],
    queryFn: () => getNoteItem(noteId),
  })

  // const noteItem = await getNoteItem(noteId)

  return (
    <div>
      <h2>NoteDetailsPage Server</h2>
      <HydrationBoundary state={dehydrate(queryClient)}>
        {/* <NoteDetailsPageClient noteId={noteId} /> */}
        <NoteDetailsPageClient />
      </HydrationBoundary>
    </div>
  )
}

export default NoteDetailsPage
