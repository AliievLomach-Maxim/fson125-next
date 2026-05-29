// import { getCategories } from '@/lib/api'
// import Link from 'next/link'

interface Props {
  children: React.ReactNode
}

const NotesLayout = async ({ children }: Props) => {
  // const categories = await getCategories()
  return (
    <div>
      {/* <h3>Categories</h3>
      <br />
      <ul>
        <li>
          <Link href={`/notes/filter/all`}>All notes</Link>
        </li>
        {categories.map((cat) => (
          <li key={cat.id}>
            <Link href={`/notes/filter/${cat.id}`}>{cat.name}</Link>
          </li>
        ))}
      </ul> */}
      <br />
      <hr />
      <br />
      {children}
    </div>
  )
}

export default NotesLayout
