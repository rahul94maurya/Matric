import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { useAppSelector } from '../../../redux/store'
import './style.css'


const AddEditForm = () => {
    const teams = useAppSelector((state) => state.teams.teams);
    // console.log("teams",teams)

    const [show, setShow] = useState<any>({
        showModal: false,
    })
    const {id} = useParams()
    const handleDelete = (id: any,name:string) => {
        // console.log("id",id)
        alert(`Are you sure to delete it ${name} records`)
    }

    const handleEdit = (id:number) => {
        // console.log("id",id)
    }
    const handleModal = (e: any) => {
        setShow({
            ...show,
            showModal: true
        })
    }

    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-12'>
                        <div className='form-group'>
                            <div className='d-flex justify-content-between'>

                                <div className='form-label'>
                                    <div className='d-flex align-items-center gap-3'>
                                        <span className='form-label mt-3 fw-bold'>Project Name:</span>
                                        <span>
                                            <input type="text" className='form-control' placeholder='Project Name' />
                                        </span>
                                    </div>
                                </div>
                                <button className='common-btn' onClick={handleModal} data-bs-toggle="modal" data-bs-target="#exampleModal">Add Member</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='row mt-5'>
                    <div className='col-lg-12'>
                        <table className='table table-hover text-center'>
                            <thead className='table-head' >
                                <tr>
                                    <th>Member</th>
                                    <th>Role</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {teams?.length ? teams?.map((item) => {
                                    return item?.members?.map((i) => {
                                        return (
                                            <>
                                                <tr key={i?.id}>
                                                    <th className='fw-normal text-capitalize'>{i?.name}</th>
                                                    <th className='fw-normal'>{i?.role}</th>
                                                    <th className='d-flex gap-5 align-items-center justify-content-center'>
                                                        <button className='common-btn' type='button' data-bs-toggle="modal" data-bs-target="#exampleModalEdit" onClick={() => handleEdit(i?.id)}>Edit</button>
                                                        <button className='common-btn' type='button' onClick={() => handleDelete(i?.id, i.name)}>Delete</button>
                                                    </th>
                                                </tr>
                                            </>
                                        )
                                    })
                                }) : <>
                                    <div className='d-flex align-items-center justify-content-end'>No data available</div>
                                </>}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>


            <div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Add Team Member</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className='row'>
                                <div className='col-lg-12'>
                                    <div className=''>
                                        <label className='fs-5'>Name:</label>
                                        <input type="text" name="" placeholder='Enter your team member name' className='form-control'/>
                                    </div> 
                                </div>
                            </div>
                            <div className='row'>
                            <div className='col-lg-12'>
                                <div className='d-flex align-items-center gap-3 mt-3'>
                                        <label className='fs-5'>Role:</label> 
                                     
                                            <input type="checkbox" className='form-check-input check'  /> 
                                            <label className='form-check-label'>SD</label>   
                                            <input type="checkbox" className='form-check-input check'  /> 
                                            <label className='form-check-label'>MD</label> 
                                            <input type="checkbox" className='form-check-input check'  /> 
                                            <label className='form-check-label'>DL</label> 
                                         
                                    </div> 
                                </div>
                            </div>

                            <div className='row'>
                                <div className='col-lg-12 mt-3'>
                                    <label>If only SD,then name ML:</label>
                                    <input type="text" className='form-control' placeholder='Enter Module Lead name'/>
                                </div>
                            </div>

                            <div className='row'>
                                <div className='col-lg-12 mt-3 d-flex align-items-center gap-5'>
                                        <label className='fs-5'>Allow member to add/edit team:</label>
                                    <div className='form-check form-switch'>
                                        <input type="checkbox" className='form-check-input' />
                                    </div>
                                </div>
                            </div>

                            <div className='row'>
                                <div className='col-lg-12 mt-3 d-flex align-items-center gap-5'>
                                        <label className='fs-5'>Allow member to add/edit sprint:</label>
                                    <div className='form-check form-switch'>
                                        <input type="checkbox" className='form-check-input' />
                                    </div>
                                </div>
                            </div>

                            <div className='row'>
                                <div className='col-lg-12 mt-3 d-flex align-items-center gap-4'>
                                        <label className='fs-5'>Allow member to see performance:</label>
                                    <div className='form-check form-switch'>
                                        <input type="checkbox" className='form-check-input' />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="common-btn" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="common-btn">Save</button>
                        </div>
                    </div>
                </div>
            </div>

           {/* EditModal */}
                 <div className="modal fade" id="exampleModalEdit" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Update Team Member</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className='row'>
                                <div className='col-lg-12'>
                                    <div className=''>
                                        <label className='fs-5'>Name:</label>
                                        <input type="text" name="" placeholder='Enter your team member name' className='form-control'/>
                                    </div> 
                                </div>
                            </div>
                            <div className='row'>
                            <div className='col-lg-12'>
                                <div className='d-flex align-items-center gap-3 mt-3'>
                                        <label className='fs-5'>Role:</label> 
                                     
                                            <input type="checkbox" className='form-check-input check'  /> 
                                            <label className='form-check-label'>SD</label>   
                                            <input type="checkbox" className='form-check-input check'  /> 
                                            <label className='form-check-label'>MD</label> 
                                            <input type="checkbox" className='form-check-input check'  /> 
                                            <label className='form-check-label'>DL</label> 
                                         
                                    </div> 
                                </div>
                            </div>

                            <div className='row'>
                                <div className='col-lg-12 mt-3'>
                                    <label>If only SD,then name ML:</label>
                                    <input type="text" className='form-control' placeholder='Enter Module Lead name'/>
                                </div>
                            </div>

                            <div className='row'>
                                <div className='col-lg-12 mt-3 d-flex align-items-center gap-5'>
                                        <label className='fs-5'>Allow member to add/edit team:</label>
                                    <div className='form-check form-switch'>
                                        <input type="checkbox" className='form-check-input' />
                                    </div>
                                </div>
                            </div>

                            <div className='row'>
                                <div className='col-lg-12 mt-3 d-flex align-items-center gap-5'>
                                        <label className='fs-5'>Allow member to add/edit sprint:</label>
                                    <div className='form-check form-switch'>
                                        <input type="checkbox" className='form-check-input' />
                                    </div>
                                </div>
                            </div>

                            <div className='row'>
                                <div className='col-lg-12 mt-3 d-flex align-items-center gap-4'>
                                        <label className='fs-5'>Allow member to see performance:</label>
                                    <div className='form-check form-switch'>
                                        <input type="checkbox" className='form-check-input' />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="common-btn" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="common-btn">Save</button>
                        </div>
                    </div>
                </div>
            </div>
             
        </>
    )
}

export default AddEditForm