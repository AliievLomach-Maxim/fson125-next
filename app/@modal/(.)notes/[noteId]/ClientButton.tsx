'use client'
interface Props {
  noteId: string
}
const ClientButton = ({ noteId }: Props) => {
  const handleClick = () => {
    window.location.href = `/notes/${noteId}`
  }
  return <button onClick={handleClick}>Go to details</button>
}

export default ClientButton
