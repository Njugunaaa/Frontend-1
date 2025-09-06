import React from 'react'
import { Link } from 'react-router-dom';

function Nav() {
    const navItems = [
        {id: 0, name: 'Home', link: '/'},
        {id: 1, name: 'About us', link: '/about'},
        {id: 3, name: 'Events', link: '/events'},
        {id: 4, name: 'Contact', link: '/contact'},
    ];
  return (
    <section className='bg-red-500 w-full p-2 h-fit flex items-center justify-center fixed'>
        <section className='bg-white w-[70%] h-[5rem] flex justify-between shadow-lg items-center'>
            <p className='ml-10'>
                logo 
            </p>
           {/* items */}
            <ul className='flex items-center gap-6'>
                {navItems.map(item => (
                    <Link
                        key={item.id}
                        to={item.link}
                    >
                        {item.name}
                    </Link>
                ))}
            </ul>

            {/* buttons */}
            <button className='mr-10 bg-[#780000] w-[7rem] h-[3rem] cursor-pointer text-white rounded-full hover:bg-[#a00000]'>
             Give now
            </button>

        </section>
    </section>
  )
}

export default Nav