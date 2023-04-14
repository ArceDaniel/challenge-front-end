import React from 'react'
import style from '../styles/NavBar.module.css' 
import Image from 'next/image'
import logo from '../../public/image/logo.svg'
import CustomLink from './CustomLink'
import { Input } from 'postcss'


const NavBar = () => {
  return (
    <header className={style.header}>
        <div className={style.logo}>
            <Image src={logo} alt="shokworks logo" />
        </div>
        <nav className={style.nav}>
            <CustomLink href="/" title="Home" />
            <CustomLink href="/about" title="About" />
            <CustomLink href="/portafolio" title="Portafolio" />
            <CustomLink href="/products" title="Products" />
            <CustomLink href="/career" title="Career" />
            <CustomLink href="/blog" title="Blog" />
            <div className={style.search}>
            <input type="text" placeholder="Search home" className={style.input} />
            <button className={style.button}>Contact Us</button>
              </div>
        </nav>
    </header>
  )
}


export default NavBar