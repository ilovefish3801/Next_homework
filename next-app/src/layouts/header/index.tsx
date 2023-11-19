import React from 'react'
import Link from 'next/link'
// image tag
import Image from 'next/image'
// images to use
import input_img from "@/assets/images/Search.png"
import liked_img from "@/assets/images/Heart.jpg"
import cart_img from "@/assets/images/Buy.jpg"
import downArrow_img from "@/assets/images/Arrow_Down.jpg"
// styles
import s from './header.module.scss'
import font from "@/styles/fonts.module.css"


const header = () => {
  return (
    <>
        <header className={s.header}>
          <div className={s.container}>
            
            <div className={`${s.container__logo} ${font.inter}`}>Logo</div>
            
            <form action="" className={s.container__form}>
                
                <input type="text" className={s.container__form_input}/>
                <Image src={input_img} alt="" quality={100} className={s.container__form_image}></Image>
            
            </form>
  
          </div>
  
          <nav className={`${font.inter} ${s.navigation}`}>
            <ul>
              <li>
                <Link href={'#'}>Товари</Link>
                <Image src={downArrow_img} alt=''></Image>
              </li>
              <li>
                <Link href={'#'}>Про нас</Link>
              </li>
              <li>
                <Link href={'#'}>Контакти</Link>
              </li>
              <li>
                <Link href={'#'}>UA</Link>
                <Image src={downArrow_img} alt=''></Image>
              </li>
              <li>
                <Image src={liked_img} alt=''></Image>
              </li>
              <li>
                <Image src={cart_img} alt=''></Image>
              </li>
            </ul>
          </nav>
  
          <button className={`${font.inter} ${s.loginBtn}`}>Вхід</button>
        </header>
    </>
  )
}

export default header