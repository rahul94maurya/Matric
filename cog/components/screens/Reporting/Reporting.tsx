import React from 'react'

const Reporting = () => {
  return (
    <>
      <div className="container col-lg-12 col-md-6">
        <div className='col-lg-12'>
          <h5 className='d-flex mt-3 mb-3 font-weight-bold'>Team 1</h5>
        </div>
        <table id="example" className="table" >
          <thead>
            <tr>
              <th>Reporting To</th>
              <th>Sprint No</th>
              <th>Start Date</th>
              <th>Due Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td rowSpan={2} className="">Ravi</td>
              <td>1</td>
              <td>01-03-2023</td>
              <td>07-03-2023</td>
              <td><button className='common-btn'>Review</button></td>
            </tr>
            <tr>
              <td>2</td>
              <td>05-03-2023</td>
              <td>12-03-2023</td>
              <td><button className='common-btn'>Review</button></td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="container col-lg-12 col-md-6">
        <div className='col-lg-12'>
          <h5 className='d-flex mt-3 mb-3 font-weight-bold'> Team 2</h5>
        </div>
        <table id="example" className="table" >
          <thead>
            <tr>
              <th>Reporting To</th>
              <th>Sprint No</th>
              <th>Start Date</th>
              <th>Due Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td rowSpan={2} className="align-items-center">Pravin</td>
              <td>1</td>
              <td>02-03-2023</td>
              <td>08-03-2023</td>
              <td><button className='common-btn'>Review</button></td>
            </tr>
            <tr>
              <td>2</td>
              <td>07-03-2023</td>
              <td>15-03-2023</td>
              <td><button className='common-btn'>Review</button></td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="container col-lg-12 col-md-6">
        <div className='col-lg-12'>
          <h5 className='d-flex mt-3 mb-3'> Team 3</h5>
        </div>
        <table id="example" className="table" >
          <thead>
            <tr>
              <th>Reporting To</th>
              <th>Sprint No</th>
              <th>Start Date</th>
              <th>Due Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td rowSpan={2} className="align-items-center">Rohit</td>
              <td>1</td>
              <td>11-03-2023</td>
              <td>18-03-2023</td>
              <td><button className='common-btn'>Review</button></td>
            </tr>
            <tr>
              <td>2</td>
              <td>15-03-2023</td>
              <td>22-03-2023</td>
              <td><button className='common-btn'>Review</button></td>
            </tr>
          </tbody>
        </table>
      </div>
      
    </>
  )
}

export default Reporting