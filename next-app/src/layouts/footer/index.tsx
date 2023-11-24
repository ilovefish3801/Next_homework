import React from 'react'
import Link from 'next/link'

// image tag
import Image from 'next/image'

// images to use
import phone_img from "@/assets/images/footer/phone.png"
import mail_img from "@/assets/images/footer/mail.png"
import clock_img from "@/assets/images/footer/clock.png"

// styles
import s from "./footer.module.scss"
import font from "@/styles/fonts.module.css"

const footer = () => {
  
  return (
    <>
      <footer className={s.footer}>
        
        <div className={s.mediaLinks}>
          <Link target='_blank' href={'https://facebook.com'}><div className={`${s.mediaLinks__facebook} ${s.mediaLink}`}></div></Link>
          <Link target='_blank' href={'https://web.telegram.org'}><div className={`${s.mediaLinks__telegram} ${s.mediaLink}`}></div></Link>
          <Link target='_blank' href={'https://www.instagram.com'}><div className={`${s.mediaLinks__instagram} ${s.mediaLink}`}></div></Link>
        </div>

        <Link href={'/'} className={`${s.logo} ${font.inter}`}>Logo</Link>

        <ul className={font.inter}>
          <li><Link href={"/"}>Товари</Link></li>
          <li><Link href={"/"}>Про нас</Link></li>
          <li><Link href={"/"}>Контакти</Link></li>
          <li><Link href={"/"}>Торгові марки</Link></li>
        </ul>

        <ul className={font.mont}>
          <li><Link href={"/"}>Зброя</Link></li>
          <li><Link href={"/"}>Техніка</Link></li>
          <li><Link href={"/"}>Електросамокати</Link></li>
          <li><Link href={"/"}>Популярне</Link></li>
          <li><Link href={"/"}>Акції</Link></li>
        </ul>

        <ul className={font.inter}>
          <li><Image src={phone_img} alt=''></Image><div>+380 93 005 27 84</div></li>
          <li><Image src={mail_img} alt=''></Image><div>militarystore@gmail.com</div></li>
          <li><Image src={clock_img} alt=''></Image><div>10:00 - 22:00</div></li>
        </ul>
        

      </footer>
    </>
  )
}

export default footer