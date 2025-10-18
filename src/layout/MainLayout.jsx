import React from 'react'

function MainLayout({ children }) {
  return (
    <div>
      {/* Header */}
      <header></header>

      {/* محتوى الصفحة */}
      <main>{children}</main>

      {/* Footer */}
      <footer></footer>
    </div>
  )
}

export default MainLayout
