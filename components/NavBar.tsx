import styles from '../styles/NavBar.module.css'
import { ActiveLink } from './ActiveLink'

const menuItems = [
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
      href: '/pricing/pricing'
  }
];

export const NavBar = () => {
  return (
    <nav className={ styles['navbar-container']}>
      {menuItems.map(({text, href}) => (
        <ActiveLink key={href} text={text} href={href} />
      ))}
    </nav>
  )
}
