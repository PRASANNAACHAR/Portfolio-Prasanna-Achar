
import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png'
import underline from '../../assets/nav_underline.svg';
import Anchorlink from 'react-anchor-link-smooth-scroll';
import menu_open from '../../assets/menu_open.svg';
import menu_close from '../../assets/menu_close.svg';

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const menuRef = React.useRef();

  const openMenu = (event) => {
    event.preventDefault();
    menuRef.current.style.right = "0";
  }

  const closeMenu = (event) => {
    event.preventDefault();
    menuRef.current.style.right = "-350px";
  }

  return (
    <div className='navbar'>
      <img src={logo} alt="" />
      <img src={menu_open} onClick={openMenu} alt="" className='nav-mob-open' />
      <ul ref={menuRef} className="nav-menu">
        <img src={menu_close} onClick={closeMenu} alt="" className="nav-mob-close" />

        <li>
          <Anchorlink className='anchor-link' href='#home' ><p onClick={() => setMenu("home")}>Home</p></Anchorlink>{menu === "home" && <img src={underline} alt='' />}
        </li>

        <li>
          <Anchorlink className='anchor-link' offset={50} href='#about' ><p onClick={() => setMenu("about")}>About Me</p></Anchorlink>{menu === "about" && <img src={underline} alt='' />}
        </li>

        <li>
          <Anchorlink className='anchor-link' offset={50} href='#services'><p onClick={() => setMenu("services")}>Services</p></Anchorlink>{menu === "services" && <img src={underline} alt='' />}
        </li>

        <li>
          <Anchorlink className='anchor-link' offset={50} href='#work'><p onClick={() => setMenu("work")}>Portfolio</p></Anchorlink>{menu === "work" && <img src={underline} alt='' />}
        </li>

        <li>
          <Anchorlink className='anchor-link' offset={50} href='#contact'><p onClick={() => setMenu("contact")}>Contact</p></Anchorlink>{menu === "contact" && <img src={underline} alt='' />}
        </li>
      </ul>
      <div className="nav-connect"><Anchorlink className='anchor-link' offset={50} href='#contact'>Connect With Me</Anchorlink></div>
    </div>
  )
}

export default Navbar;