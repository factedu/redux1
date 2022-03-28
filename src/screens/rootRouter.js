import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Container from '../components/Container'
import Counter from '../components/Counter'
import HomeScreen from './HomeScreen'

const RootRouter = () => {
  return (
    <Routes>
        <Route path='/' element={<Container><HomeScreen/></Container>} />
    </Routes>
  )
}

export default RootRouter