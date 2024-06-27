import React from 'react'
import Home from './Home'
import Form from './Student'
import {Routes , Route} from 'react-router-dom'
import Clip from './Clip'
import FinalClip from './FinalClip'

function App() {
  return (
     <>
       <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Form' element={<Form/>}/>
          <Route path='/Clip' element={<Clip/>}/>
          <Route path='/FinalClip' element={<FinalClip/>}/>

       </Routes>
       
     
     </>
  )
}

export default App