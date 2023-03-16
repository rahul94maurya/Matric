import React, { useState } from 'react'
import './style.css'

type dataType = {
    id: number,
    name: string,
    role: string[]
}


const tableDummyData: dataType[] = [
    { id: 1, name: "John doe", role: ["SD,ML"] },
    { id: 2, name: "Sasil", role: ["SD"] },
    { id: 3, name: "Martha", role: ["SD,ML,DL"] },
    { id: 4, name: "Alex", role: ["SD,ML"] },
]

const AddEditForm = () => {
    const [show, setShow] = useState<any>({
        showModal: false,
    })
    const [data, setData] = useState([...tableDummyData])

    const handleDelete = (id:any) => {
        alert("Are you sure to delete it")
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
                            <thead className='table-head'>
                                <tr>
                                    <th>Member</th>
                                    <th>Role</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            {data?.length ? data?.map((item, indx) => {
                                return (

                                    <tbody key={indx}>
                                        <tr>
                                            <th className='fw-normal'>{item?.name}</th>
                                            <th className='fw-normal'>{item?.role}</th>
                                            <th className='d-flex gap-5 align-items-center justify-content-center'>
                                                <button type='button' className='common-btn fw-normal'>Edit</button>
                                                <button type='button' className='common-btn fw-normal' onClick={() => handleDelete(item.id)}>Delete</button>
                                            </th>
                                        </tr>
                                    </tbody>
                                )
                            }) :
                             <>
                            <div className='d-flex align-items-center justify-content-center' style={{height:"50vh"}}>No data available</div>
                            </>}
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddEditForm