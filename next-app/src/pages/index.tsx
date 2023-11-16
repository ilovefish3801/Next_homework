import React from 'react'
// image
import Image from 'next/image'
// Image for src
import img from "@/assets/image/stebnuk.jpg"
// components
import ShowInfo from '@/components/ShowInfo'
import ShowBookInfo from '@/components/ShowBookInfo'
// modules
import { showInfo } from "@/modules/showInfo"

const index = () => {
  // init
  const SHOW = new showInfo

  const data = [{
    name: "Стебник",
    country: "Україна",
    year: 1934,
  }]

  const bookInfo = [{
    name: "Алгебра",
    author: "Істер Олександр Семенович",
    genre: "Навчальний посібник",
    pages: 262,
    review: "Автор все зрозуміло описав. Рекомендую цю книжку !"
 }]

  return (
    <>
      {/* Task 1 */}
      {/* {
        data.map((e)=>{
          return <ShowInfo data={e}/>
        })
      }

      <Image src={img} alt="" quality={100}></Image> */}

      
      
      {/* Task 2 */}
      {/* <h1>Місто: {SHOW.getName()}</h1>
      <h2>Країна: {SHOW.getCountry()}</h2>
      <h3>Рік заснування: {SHOW.getFoundationYear()} рік</h3>
      <Image src={img} alt="" quality={100}></Image>  */}

      
      {/* Task 3 */}
      {/* {
        bookInfo.map((e)=>{
          return <ShowBookInfo bookInfo={e}/>
        })
      } */}


      {/* Task 4 */}
      {/* <h1>Назва книжки: {SHOW.getBookName()}</h1>
      <h2>Автор: {SHOW.getBookAuthor()}</h2>
      <h2>Жанр: {SHOW.getBookGenre()}</h2>
      <h2>Кількість сторінок: {SHOW.getBookPages()}</h2>
      <h2 style={{marginBottom: 0, marginTop: 50}}>Рецензія: </h2>
      <br />
      <p style={{marginTop: 0, marginLeft: 20, fontSize: 20}}><i>{SHOW.getBookReview()}</i></p> */}

    </>


  )
}

export default index