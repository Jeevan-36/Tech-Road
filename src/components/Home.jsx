import React from 'react'
import TechCard from './TechCard'
import Charts from './Charts'
const Home = ({countTechnologyCompletion}) => {
   
  return (
    <>
    <Charts countTechnologyCompletion={countTechnologyCompletion}></Charts>
    <TechCard />
    </>
  )
}

export default Home