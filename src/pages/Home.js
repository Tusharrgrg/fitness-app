import React, { useState } from 'react'
import {Box} from '@mui/material'
import HeroBanner from '../components/HeroBanner'
import SearchExercise from '../components/SearchExercise'
import Exercises from '../components/Exercises'

const Home = () => {
  const [exercises , setExercises] = useState([]);
  const [bodyPart , setBodyPart] = useState('all');
  // console.log(process.env.REACT_APP_RAPID_KEY)
  return (
    <Box>
      <HeroBanner/>
      
      <SearchExercise setBodyPart={setBodyPart} setExercises={setExercises} bodyPart={bodyPart}/>
      <Exercises exercises={exercises} setExercises={setExercises} bodyPart={bodyPart}/>
    </Box>
  )
}

export default Home
