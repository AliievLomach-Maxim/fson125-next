'use client'

interface ErrorPageProps {
  error: Error
}

const ErrorPage = ({ error }: ErrorPageProps) => {
  return <div style={{ color: 'red' }}>ErrorPage {error.message}</div>
}

export default ErrorPage
