import React, { FC } from 'react'
import { useRouter } from 'next/router'

import MainLayout from 'src/layouts/main'

//types
import PageWithLayout from 'src/types/pageWithLayout'

const Home: FC = () => {
  const router = useRouter()

  const sections = [
    { name: 'Section 1', show: true, img: '/section-1.jpg' },
    { name: 'Section 2', show: true, img: '/section-2.jpg' },
    { name: 'Section 3', show: true, img: '/section-3.jpg' },
    { name: 'Section 4', show: true, img: '/section-4.jpg' },
  ]

  const sectionsFiltered = sections.filter((section) => section.show)

  return (
    <div>
      Home
      <div>
        {sectionsFiltered.map((section) => (
          <div
            key={section.name}
            style={{ padding: '10px', margin: '10px', border: '1px solid black', width: '450px' }}
          >
            <div>{section.name}</div>
            <img style={{ width: '400px', height: '400px' }} src={section.img} alt={section.name} />
          </div>
        ))}
      </div>
    </div>
  )
}

;(Home as PageWithLayout).layout = MainLayout

export default Home
