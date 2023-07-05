import React from 'react'

const Footer = () => {
  return (    
    <footer
      className="bg-dark text-center text-white"
      style={{
        position: "fixed",
        bottom: "0px",
        width: "100%",
        height: "60px"
      }}  
    >
      <div className="container p-4">
        <p className="mb-0">  © 2023 Parcial-Movies. Franco Ibañez.</p>
      </div>
    </footer>
  )
}

export default Footer