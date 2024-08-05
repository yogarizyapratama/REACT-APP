import React from 'react'
import ProjectStatics from '../components/Charts/ProjectStatics'
import Platform from '../components/Platform'
import { get } from '../utils/api-utils'
import LineChart from '../components/Charts/LineChart'
import ColumnChart from '../components/Charts/ColumnChart'
import BarChart from '../components/Charts/BarChart'
import ImageInput from '../components/ImageInput'
const Home = () => {
  return (
    <div className='p-5'>
        <div className='mb-3'>
            <ProjectStatics/>
        </div>
        <ImageInput/>
        <div className='grid md:grid-cols-2 xl:grid-cols-3 gap-4'>
        <LineChart/>
        <ColumnChart/>
        <Platform/>
        <BarChart/>
        </div>
    </div>
  )
}

export default Home