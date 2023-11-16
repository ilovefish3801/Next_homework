import React from 'react'

interface Props {
    bookInfo: {
        name: string,
        author: string,
        genre: string,
        pages: number,
        review: string
    }
  }

const ShowBookInfo = (props: Props) => {
    const { name, author, genre, pages, review } = props.bookInfo
  return (
    <>
        <h1>Назва книжки: {name}</h1>
        <h2>Автор: {author}</h2>
        <h2>Жанр: {genre}</h2>
        <h2>Кількість сторінок: {pages}</h2>
        <h2 style={{marginBottom: 0, marginTop: 50}}>Рецензія: </h2>
        <br />
        <p style={{marginTop: 0, marginLeft: 20, fontSize: 20}}><i>{review}</i></p>
    </>
  )
}

export default ShowBookInfo