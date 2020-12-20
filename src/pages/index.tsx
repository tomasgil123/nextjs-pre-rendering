/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { FC, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

import MainLayout from 'src/layouts/main'

//types
import PageWithLayout from 'src/types/pageWithLayout'
interface ListElementProps {
  name: string
  img: string
}

const ListElement = ({ name, img }: ListElementProps): JSX.Element => {
  return (
    <div
      style={{
        padding: '10px',
        margin: '10px',
        border: '1px solid black',
        width: '100px',
      }}
    >
      <div>{name}</div>
      <img style={{ width: '50px', height: '50px' }} src={img} alt={name} />
    </div>
  )
}

const Home: FC = () => {
  const router = useRouter()

  const showSection1 = !router.asPath.includes('section1')

  const [showSection2, setShowSection2] = useState(true)

  const sections = [
    { name: 'Section 1', show: showSection1, img: '/one.png' },
    { name: 'Section 2', show: showSection2, img: '/two.png' },
    { name: 'Section 3', show: true, img: '/three.png' },
    { name: 'Section 4', show: true, img: '/four.png' },
  ]

  const sectionsFiltered = sections.filter((section) => section.show)

  const showSection1ForQueryList = !(router?.query['section1'] === '')

  const sectionsForQueryList = [
    { name: 'Section 1', show: showSection1ForQueryList, img: '/one.png' },
    { name: 'Section 2', show: showSection2, img: '/two.png' },
    { name: 'Section 3', show: true, img: '/three.png' },
    { name: 'Section 4', show: true, img: '/four.png' },
  ]

  const sectionsFilteredForQueryList = sectionsForQueryList.filter((section) => section.show)

  return (
    <div>
      Home
      <Link href="/second">
        <a>Go to second page</a>
      </Link>
      <div>
        <button onClick={(): void => setShowSection2(!showSection2)}>Hide section 2</button>
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }}>
        <div>
          <div>Sections pre-filtered with asPath</div>
          {sectionsFiltered.map((section) => (
            <div key={`${section.name}-1`}>
              <ListElement name={section.name} img={section.img} />
            </div>
          ))}
        </div>
        <div>
          <div>Sections NOT pre-filtered with asPath</div>
          {sections.map((section) => (
            <div key={`${section.name}-2`}>
              <>{section.show && <ListElement name={section.name} img={section.img} />}</>
            </div>
          ))}
        </div>
        <div>
          <div>Sections pre-filtered with query param</div>
          {sectionsFilteredForQueryList.map((section) => (
            <div key={`${section.name}-3`}>
              <ListElement name={section.name} img={section.img} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

;(Home as PageWithLayout).layout = MainLayout

export default Home
