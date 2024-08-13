import React from 'react'
import './Admin.css'
import { Routes ,Route} from 'react-router-dom'
import Sidebar from '../../Component/Sidebar/Sidebar'
import Addproduct from '../../Component/Addproduct/Addproduct'
import Listproduct from '../../Component/Listproduct/Listproduct'
const Admin = () => {
  return (
    <div className='admin'>
      <Sidebar/>
      <Routes>
        <Route path='/addproduct' element={<Addproduct/>} />
        <Route path='/listproduct' element={<Listproduct/>} />
      </Routes>
    </div>
  )
}

export default Admin
