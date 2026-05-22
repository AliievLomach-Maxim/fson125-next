// // CSR
// 'use client'

// import { getNotes } from '@/lib/api'
// import { ResponseNoteItem } from '@/lib/types'
// import { useEffect, useState } from 'react'

// const Notes = () => {
//   const [notes, setNotes] = useState<ResponseNoteItem[]>([])

//   useEffect(() => {
//     const fetchNotes = async () => {
//       const res = await getNotes()
//       setNotes(res.notes)
//     }
//     fetchNotes()
//   }, [])

//   return (
//     <div>
//       <h2>Note list</h2>
//       <br />
//       <button onClick={() => console.log('CLICK')}>Click for Get notes</button>
//       <br />
//       {notes.map((note) => (
//         <li key={note.id}>{note.title}</li>
//       ))}
//     </div>
//   )
// }

// export default Notes

// SSR >>>>>

import { getNotes } from '@/lib/api'
import Link from 'next/link'

const Notes = async () => {
  // useEffect(() => {
  //   const fetchNotes = async () => {
  //     const notes = await getNotes()
  //     console.log('notes', notes)
  //   }
  //   fetchNotes()
  // }, [])

  const res = await getNotes()
  console.log('res', res)

  return (
    <div>
      <h2>Note list</h2>
      <br />
      {res?.notes.map((note) => (
        <li key={note.id}>
          <Link href={`/notes/${note.id}`}>{note.title}</Link>
        </li>
      ))}
    </div>
  )
}

export default Notes
