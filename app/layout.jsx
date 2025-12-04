import NavBar from './components/NavBar'
import Footer from './components/Footer'

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
        <Footer />
      </body>
    </html>
  )
}

export default mainLayout
