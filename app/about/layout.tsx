import Header from '@/components/Header/Header'
import React from 'react'

interface Props {
  children: React.ReactNode
}
const AboutLayout = ({ children }: Props) => {
  return (
    <div>
      <hr />
      <Header />
      <hr />
      <h2>AboutLayout</h2>
      <hr />
      {children}
    </div>
  )
}

export default AboutLayout
