import React from 'react'
// image tag
import Image from 'next/image'
// images to use
import input_img from "@/assets/images/Search.jpg"
// styles
import s from './header.module.scss'
import font from "@/styles/fonts.module.css"

const header = () => {
  return (
    <>
        <div className={s.container}>
            
        <div className={`${s.container__logo} ${font.inter}`}>Logo</div>
            
            <form action="" className={s.container__form}>

                <input type="text" className={s.container__form_input}/>
                <Image src={input_img} alt="" quality={100} className={s.container__form_image}></Image>
            
            </form>

        </div>
    </>
  )
}

export default header