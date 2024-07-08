// import React from 'react'

import { BiCart } from "react-icons/bi"
import logo from '@/public/MenWears.png'
import Image from "next/image"
const Navbar = () => {
  return (
    <div>
        <nav className="flex justify-between">


          <Image src={logo} alt="logo"/>

          <div>
            <input placeholder="search" type="text"/>
          </div>
            <ul>
<li>
   Shop 
</li>
<li>Wishlist</li>
<li>Cart <BiCart/></li>
<li>Profile</li>
            </ul>

        </nav>

    </div>
  )
}

export default Navbar