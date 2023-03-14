import React from 'react'
import { useNavigate } from 'react-router-dom'

const AddEditTeams = () => {
  const navigate = useNavigate()
  const handleClik = () => {
    navigate("/addEditForm")
  }

  const cardClick = () => {
    console.log("click")
    // navigate("/addEditForm")
  }
  return (
    <>
      <div className='row m-0'>
        <div className='col-lg-12'>
          <div className='d-flex align-items-center justify-content-end'>
            <button className='common-btn' type='button' onClick={handleClik}>Add Team</button>
          </div>
        </div>
      </div>

      <div className='row mt-3'>
        <div className='col-lg-3'>
          <div className='card' onClick={cardClick}>
            <div>Team Name : <span>UI</span></div>
            <div>Total Member <span>25</span></div>
          </div>
        </div>

        <div className='col-lg-3'>
          <div className='card'>
            <div>Team Name : <span>UI</span></div>
            <div>Total Member <span>25</span></div>
          </div>
        </div>

        <div className='col-lg-3'>
          <div className='card'>
            <div>Team Name : <span>UI</span></div>
            <div>Total Member <span>25</span></div>
          </div>
        </div>

        <div className='col-lg-3'>
          <div className='card'>
            <div>Team Name : <span>UI</span></div>
            <div>Total Member <span>25</span></div>
          </div>
        </div>

      </div>
    </>
  )
}

export default AddEditTeams