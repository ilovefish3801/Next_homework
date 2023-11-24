import {use, useState} from 'react'
import Link from 'next/link'
import Image from 'next/image'

// images to use
import input_img from "@/assets/images/header/Search.png"
import liked_img from "@/assets/images/header/Heart.jpg"
import cart_img from "@/assets/images/header/Buy.jpg"
import downArrow_img from "@/assets/images/header/Arrow_Down.jpg"
import upArrow_img from "@/assets/images/header/Arrow_Up.jpg"

// styles
import s from './header.module.scss'
import font from "@/styles/fonts.module.css"


const header = () => {
  // states
  const [focus, setFocus] = useState<boolean>(false)
  const [productsHover, setHoverProducts] = useState<boolean>(false)
  const [langHover, setHoverLang] = useState<boolean>(false)
  const [burger, setBurger] = useState<boolean>(false)

  burger ? document.body.classList.add('fixed') : document.body.classList.remove('fixed')
  return (
    <>
        <header className={s.header}>
            
          <Link href={'/'} className={`${s.logo} ${font.inter}`}>Logo</Link>
          
          <form action="" className={s.form}>
              
              <input id='header_input' onBlur={(e)=>{e.target.value.length > 0 ? setFocus(true) : setFocus(false)}} onFocus={()=>{setFocus(true)}} type="text" className={`${s.form__input} ${font.inter}`}/>
              <label htmlFor="header_input"><Image src={input_img} alt="" quality={100} className={`${s.form__image} ${focus ? s.hide : s.show}`}></Image></label>
          
          </form>
  
  
          <nav className={`${font.inter} ${s.navigation}`}>
            <ul>
              <li style={{position: "relative"}}>
                <Link href={'#'}>Товари</Link>
                <Image onClick={()=>{productsHover ? setHoverProducts(false) : setHoverProducts(true)}} src={productsHover ? upArrow_img : downArrow_img} alt=''></Image>
                <div style={productsHover ? {display: "block"} : {display: "none"}} className={`${s.dropdownProducts} ${s.dropdown}`}>Я не знав що сюди додати</div>
              </li>
              
              <li>
                <Link href={'#'}>Про нас</Link>
              </li>
              
              <li>
                <Link href={'#'}>Контакти</Link>
              </li>
              
              <li style={{position: "relative"}}>
                <div>UA</div>
                <Image onClick={()=>{langHover ? setHoverLang(false) : setHoverLang(true)}} src={langHover ? upArrow_img : downArrow_img} alt=''></Image>
                <div style={langHover ? {display: "block"} : {display: "none"}} className={`${s.dropdownLang} ${s.dropdown}`}>Я не знав що сюди додати</div>
              </li>
            </ul>

            <div onClick={()=>{
              burger ? setBurger(false) : setBurger(true)
            }} className={`${s.navigation__burger} ${burger ? s.active : s.unactive}`}>
              <div></div>
              <div></div>
              <div></div>
            </div>

          </nav>

          <div className={s.interactionBtns}>
            <div className={s.interactionBtns__likeBtn}><Link href={'/'}><Image src={liked_img} alt=''></Image></Link></div>
            <div className={s.interactionBtns__cartBtn}><Link href={'/'}><Image src={cart_img} alt=''></Image></Link></div>
          </div>

          <button className={`${font.inter} ${s.loginBtn}`}>Вхід</button>

          <div className={`${s.mobileMenu} ${burger ? s.active : ''} ${font.inter}`}>
            <nav className={s.mobileMenu__nav}>
              <ul>
                <li style={productsHover ? {marginBottom: 160, position: "relative"} : {marginBottom: 30, position: "relative"}}>
                  <Link href={'#'}>Товари</Link>
                  <Image onClick={()=>{productsHover ? setHoverProducts(false) : setHoverProducts(true)}} src={productsHover ? upArrow_img : downArrow_img} alt=''></Image>
                  <div style={productsHover ? {display: "block"} : {display: "none"}} className={`${s.dropdownProducts} ${s.dropdown}`}>Я не знав що сюди додати</div>
                </li>

                <li>
                  <Link href={'#'}>Про нас</Link>
                </li>

                <li>
                  <Link href={'#'}>Контакти</Link>
                </li>

                <li style={{position: "relative"}}>
                  <div style={{fontSize: 28}}>UA</div>
                  <Image onClick={()=>{langHover ? setHoverLang(false) : setHoverLang(true)}} src={langHover ? upArrow_img : downArrow_img} alt=''></Image>
                  <div style={langHover ? {display: "block"} : {display: "none"}} className={`${s.dropdownLang} ${s.dropdown}`}>Я не знав що сюди додати</div>
                </li>
              </ul>
            </nav>
          </div>

        </header>
    </>
  )
}

export default header