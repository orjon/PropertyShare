import NavBar from './components/NavBar'

import '@/assets/styles/globals.css'

export const metadata = {
  title: 'Property Share',
  keywords: 'rental, property, sharing',
  description: 'Property Share is a platform for sharing properties'
}

const mainLayout = ({ children }) => {
  return (
    <html>
      <body>
        <NavBar />
        <main>{children}</main>
      </body>
    </html>
  )
}

export default mainLayout
