/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Link from 'next/link'

const Second = (): JSX.Element => {
  return (
    <div>
      <Link href="/?section1">
        <a>Home</a>
      </Link>
    </div>
  )
}

export default Second
