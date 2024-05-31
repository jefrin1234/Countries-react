import React from 'react'


function Header() {
  return (
    <>

    <div className='flex items-center h-20 border-b-2   bg-black justify-around  '>
      <div>
       <h1 className='text-3xl text-orange-500'>Countries</h1>
       </div>
       <div>
        <ul className='flex gap-11'>
          <li className='text-xl text-purple-50'>Home</li>
          <li className='text-xl text-purple-50'>about</li>
          <li className='text-xl text-purple-50'>news</li>
        </ul>
        </div>
     </div>

    </>
  )
}

export default Header
