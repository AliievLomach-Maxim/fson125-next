import { getCategories } from '@/lib/api'
import Link from 'next/link'

const Parallel = async () => {
  const categories = await getCategories()

  return (
    <aside>
      <h3>Categories</h3>
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
      </ul>
    </aside>
  )
}

export default Parallel
