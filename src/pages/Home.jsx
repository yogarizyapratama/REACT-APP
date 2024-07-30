import React from 'react'
import ProjectStatics from '../components/ProjectStatics'
import Platform from '../components/Platform'
import { get } from '../utils/api-utils'
const Home = () => {
  return (
    <div className='p-5'>
        <div className='grid md:grid-cols-2 xl:grid-cols-4 gap-4'>
        <ProjectStatics/>
        <Platform/>
        <ProjectStatics/>
        <Platform/>
        <ProjectStatics/>
        <Platform/>
        <ProjectStatics/>
        <Platform/>
        <ProjectStatics/>
        <Platform/>
        <ProjectStatics/>
        <Platform/>
        </div>
    </div>
  )
}

export default Home