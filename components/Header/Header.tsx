import Link from 'next/link'
import css from './Header.module.css'

const Header = () => {
  return (
    <header>
      <nav>
        <ul className={css.list}>
          <li>
            <Link href='/'>Home</Link>
          </li>
          <li>
            <Link href='/about'>About</Link>
          </li>
          <li>
            <Link href='/profile'>Profile</Link>
          </li>
          <li>
            <Link href='/notes/filter/all'>Notes</Link>
          </li>
          <li>
            <Link href='/work'>To work</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
