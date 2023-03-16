import React, { useState } from 'react'
import { useAppSelector } from '../../../redux/store'
import './style.css'


const AddEditForm = () => {
    const teams = useAppSelector((state) => state.teams.teams);
    // console.log("teams",teams)

    const [show, setShow] = useState<any>({
        showModal: false,
    })

    const handleDelete = (id: any,name:string) => {
        // console.log("id",id)
        alert(`Are you sure to delete it ${name} records`)
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
                                <button className='common-btn' onClick={(e) => handleModal(e)}>Add Member</button>
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
                                                        <button className='common-btn' type='button'>Edit</button>
                                                        <button className='common-btn' type='button' onClick={() => handleDelete(i?.id,i.name)}>Delete</button>
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
        </>
    )
}

export default AddEditForm