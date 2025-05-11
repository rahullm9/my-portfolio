import React from 'react'

const Navbar = () => {
  return (
    <div className='flex flex-row justify-between px-12'>
      <div id='logo' className=''>Logo</div>
      <div id='buttonsContainer' className='flex gap-7'>
            <button>About</button>
            <button>About</button>
            <button>About</button>
            <button>About</button>
      </div>
    </div>
  )
}

export default Navbar
