import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className="text">
      <Link to="/"><h1>CryptoSearch</h1></Link>
  </div>
  )
}

export default Header;