import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppSelector } from '../../../redux/store';
import Card from '../../sections/card';
import './style.css'


const AddEditTeams = () => {
  const teams = useAppSelector((state) => state.teams.teams);

  const navigate = useNavigate()
  
  
  const handleClick = () => {
    navigate("/addEditForm")
  }

  const cardClick = (id:number) => {
    // console.log("click",id)
    navigate("/addEditForm")
  }
  return (
    <>
      <div className='row m-0'>
        <div className='col-lg-12'>
          <div className='d-flex align-items-center justify-content-end'>
            <button className='common-btn' type='button' onClick={handleClick}>Add Team</button>
          </div>
        </div>
      </div>


      <div className='row mt-3'>
        {teams?.length ? teams?.map((item, indx) => {
          return (
            <div className='col-lg-4 mt-3' key={indx}>
              <>
                <Card>
                <div className='menuBar'  onClick={() => cardClick(item?.id)}>
                  <div>Team Name : <span>{item?.teamName}</span></div>
                  <div>Total Member <span>{item?.members.length}</span></div>
                </div>
                </Card>
              </>
            </div>
          )
        }) : 
        <>
        <div className='d-flex align-items-center justify-content-center no-data' >No data available</div>
        </>}
      </div>
    </>
  )
}

export default AddEditTeams