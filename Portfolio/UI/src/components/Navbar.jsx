import React from 'react'

const Navbar = () => {
  return (
    <>
    <div className="mt-6 sticky top-0 bg-gray-200">
        <nav class="text-4xl ml-[650px] flex gap-6">
            <a href="#home">HOME</a>
            <a href="#edu">EDUCATION</a>
            <a href="#exp">EXPERIENCE</a>
            <a href="#cnt">CONTACT</a>
        </nav>
    </div>
    </>
  )
}

export default Navbar