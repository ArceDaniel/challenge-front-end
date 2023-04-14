import React from 'react'
import style from "@/styles/Hero.module.css"
import Image from 'next/image'
import image from "../../public/image/community1.png"
const Hero = () => {
  return (
    <section className={style.hero}>
      <div className={style.hero__container}>
        <Image src={image} alt="hero" />
        <h1 className={style.hero__title}>A Brand New Way <br/> To See The World</h1>
        <div className={style.button_container}>
          <div className={style.firt__button}>Our Works</div>
          <div className={style.second__button}>Know More</div>
        </div>
      </div>

        
    </section>
  )
}

export default Hero