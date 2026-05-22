'use client'

const NoteButtons = () => {
  return (
    <div>
      <button onClick={() => console.log('CLICK')}>Edit</button>
      <hr />
      <button>Delete</button>
    </div>
  )
}

export default NoteButtons
