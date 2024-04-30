import React, { useEffect, useState } from 'react'
import './LeftBar.css'
import { axiosGet } from '../../../axiosServices'

const LeftBar = ({ employeeId }) => {
  const [empById, setEmpById] = useState([])


  const getEmployeeById = async () => {
    try {
      const res = await axiosGet(`/employee/${employeeId}`)
      setEmpById(res.data)
    }
    catch (err) {
      console.log(err)
    }
  }
  useEffect(() => {
    getEmployeeById()
  }, [employeeId])

  return (
    <nav className='leftNav'>
      <div className="employeeDetail">
        <div className='emp'>
        <h1>Employee Details</h1>
        </div>
        <div className='empdis'>
          {/* <img src={empById.image}/> */}
        <h1>{empById.firstname} {empById.lastname}</h1>
        <p>{empById.email}</p>
        <p>{empById.phone}</p>
        <p className='job'>{empById.job}</p>
        <p className='date'>{empById.dateofjoining}</p>

        </div>
        
      </div>
    </nav>
  )
}

export default LeftBar;
