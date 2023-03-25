import * as React from 'react'

async function Layout({ children }: { children: React.ReactNode }) {
  
  return (
    <div>
      <p>this is the blog layout</p>
      {children}
    </div>
  )
}

export default Layout
