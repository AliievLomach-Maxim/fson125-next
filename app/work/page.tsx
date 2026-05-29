import { redirect } from 'next/navigation'
import React from 'react'

const WorkPage = () => {
  redirect('/private')
  return <div>Go to work!!!</div>
}

export default WorkPage
