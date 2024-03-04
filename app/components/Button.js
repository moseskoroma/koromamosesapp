import Link from 'next/link'
import React from 'react'

const Button = ({text, link}) => {
  return (
    <Link href={link} className='btn'>{text}</Link>
  )
}

export default Button