import Link from 'next/link'

interface Props {
  children: React.ReactNode
}

const ProfileLayout = ({ children }: Props) => {
  return (
    <div>
      <ul>
        <li>
          <Link href='/profile'>Profile</Link>
        </li>
        <li>
          <Link href='/profile/settings'>Settings</Link>
        </li>
        <li>
          <Link href='/profile/notifications'>Notifications</Link>
        </li>
      </ul>
      <hr />
      {children}
    </div>
  )
}

export default ProfileLayout
