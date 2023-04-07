import React, { useState } from 'react'
import {Box} from '@mui/material'
import HeroBanner from '../components/HeroBanner'
import SearchExercise from '../components/SearchExercise'
import Exercises from '../components/Exercises'

const Home = () => {
  const [exercise , setExercise] = useState([]);
  const [bodyPart , setBodyPart] = useState('all');
  return (
    <Box>
      <HeroBanner/>
      <SearchExercise setBodyPart={setBodyPart} setExercise={setExercise} bodyPart={bodyPart}/>
      <Exercises setBodyPart={setBodyPart} setExercise={setExercise} bodyPart={bodyPart}/>
    </Box>
  )
}

export default Home
