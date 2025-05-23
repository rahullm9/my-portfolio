import React from 'react'

const Navbar = () => {
  return (
    <div id='nav' >
      <h3>Logo</h3>
      <div id='buttonsContainer' className='flex gap-7'>
            <button>About</button>
            <button>Projects</button>
            <button>Skills</button>
            <button>Education</button>
            <button>Contact</button>
            <i class="ri-menu-3-fill"></i>
      </div>
    </div>
  )
}

export default Navbar
