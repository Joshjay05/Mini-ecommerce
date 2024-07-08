// import React from 'react'

import Navbar from "./Navbar"
import men from '@/public/men.png'
import Image from "next/image"
const Hero = () => {
  return (
    <header>
        <Navbar/>
<section>

    <article>
<p>Welcome to our <b>Men Fashion Collection!</b> </p>

<p>Explore our curated selection of stylish clothing and accessories, from tailored suits and dress shirts to casual jeans and trendy streetwear. Complete your look with premium watches, belts, and footwear. Discover quality pieces that reflect your personality and enhance your confidence.</p>

<a href="/">Shop Now</a>


    </article>

    <article>
        <Image src={men} alt="men"/>
    </article>
</section>

    </header>
  )
}

export default Hero