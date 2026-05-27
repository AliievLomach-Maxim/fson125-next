import Link from 'next/link'

const NotFoundPage = () => {
  return (
    <div>
      <h1> Ooops.. Page not found.</h1>
      <br />
      <Link href='/'>Back to home</Link>
    </div>
  )
}

export default NotFoundPage

// const someFn = ([...params]) => {
//   return a
// }

// someFn(10, 12, 12, 12, 12, 12)
// someFn(10, 12, 12, 12)
// someFn(10)
// .com/about/termOfUse
// .com/about/userInfo
// .com/about/readme
// .com/about/termOfUse/newExtraInfo
// .com/about/termOfUse/newExtraInfo/info
