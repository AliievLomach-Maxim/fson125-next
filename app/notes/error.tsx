'use client'

interface ErrorPageProps {
  error: Error
  reset: () => void
}

const ErrorPage = ({ error, reset }: ErrorPageProps) => {
  return (
    <div style={{ color: 'blue' }}>
      ErrorPage {error.message}
      <br />
      <button onClick={() => reset()}>Reset page</button>
    </div>
  )
}

export default ErrorPage
