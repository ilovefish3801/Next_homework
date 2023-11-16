import React from 'react'

interface Props {
    data: {
      name: string,
      country: string,
      year: number
    }
}

const showInfo = (props: Props) => {
  const {name, country, year} = props.data
  return (
    <>
      <h1>Місто: {name}</h1>
      <h2>Країна: {country}</h2>
      <h3>Рік заснування: {year} рік</h3>
    </>
  )
}

export default showInfo