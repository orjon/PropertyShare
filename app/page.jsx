import Link from 'next/link'

const HomePage = () => {
  return (
    <div className='text-2xl'>
      <h1>Welcome to Property Share</h1>
      <Link href='/properties'>Go to Properties</Link>
    </div>
  )
}

export default HomePage
