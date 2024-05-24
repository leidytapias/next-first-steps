import React from 'react';
import { HomeIcon } from '@primer/octicons-react';
import Link from 'next/link';
import { ActiveLink } from '../active-link/ActiveLink';

const navItems =[
  {path: '/about', text: 'about'},
  {path: '/pricing', text: 'pricing'},
  {path: '/contact', text: 'contact'},

]

export const Navbar = () => {
  return (
    <nav className='flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded'>
      <Link href='/' className='flex-items-center'>
        <span>Home</span>
        <HomeIcon className='ml-2'/>
      </Link>
  
      
      <div className='flex flex-1'></div>
      {
        navItems.map(navItem => (
          <ActiveLink key={navItem.path} { ...navItem }/>
    
        ))
      }
    
    </nav>
  )
}
