import React from 'react'

const Footer = () => {
  return (
    <footer className="h-[60px] border border-t-2 flex flex-row justify-center items-center text-sm">
        All Rights Reserved - {new Date().getFullYear()}
    </footer>
  )
}

export default Footer