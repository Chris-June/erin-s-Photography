import { ReactNode } from 'react'
import Header from './Header'
import Footer from './Footer'

interface LayoutProps {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen w-full">
      <Header />
      <main className="w-full pt-16">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout
