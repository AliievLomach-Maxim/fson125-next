interface Props {
  params: Promise<{ slug: string[] }>
}

const SlugPage = async ({ params }: Props) => {
  const slug = await params
  console.log('slug', slug)
  return (
    <div>
      SlugPage
      <hr />
    </div>
  )
}

export default SlugPage
