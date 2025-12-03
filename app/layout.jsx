import '@/assets/styles/globals.css'

export const metadata = {
  title: 'Property Share',
  keywords: 'rental, property, sharing',
  description: 'Property Share is a platform for sharing properties'
}

const MainLayout = ({ children }) => {
  return (
    <html>
      <body>
        <main>{children}</main>
      </body>
    </html>
  )
}

export default MainLayout
