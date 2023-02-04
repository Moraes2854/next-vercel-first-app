import React from 'react'
import styles from './Navbar.module.css';
import { ActiveLink } from './ActiveLink';

interface MenuItem {
  text:string;
  href:string;
}

const menuItems:MenuItem[] = [
  {
    text: 'Home',
    href: '/'
  },
  {
    text: 'About',
    href: '/about'
  },
  {
    text: 'Contact',
    href: '/contact'
  },
  {
    text: 'Pricing',
    href: '/pricing'
  },
];

export const Navbar = () => {
  return (
    <nav className={ styles['menu-container'] }>
      
        {
          menuItems.map( ({ text, href }) => <ActiveLink key={`ActiveLink${text}`} href={href} text={text}/> )
        }
        
    </nav>
  )
}
