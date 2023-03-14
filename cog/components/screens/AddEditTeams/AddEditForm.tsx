import React from 'react'

const AddEditForm = () => {

    const handleDelete = () => {
        alert("Are you sure to delete it")
    }
    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-12'>
                        <div className='form-group'>
                            <div className='row'>
                                <div className='col-lg-6'>
                                    <div className='form-label'>
                                        <div className='d-flex align-items-center gap-3'>
                                            <span className='form-label fw-bold'>Project Name:</span>
                                            <span>
                                                <input type="text" className='form-control' placeholder='Project Name' />
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div className='col-lg-6'>
                                    <button className='common-btn'>Add Member</button>
                                </div>

                                <div className='col-lg-6'>
                                    <div className='form-label'>
                                        <div className='d-flex align-items-center gap-3'>
                                            <span className='form-label fw-bold'>Team's Name:</span>
                                            <span>
                                                <input type="text" className='form-control' placeholder='Team Name' />
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className='row mt-5'>
                    <div className='col-lg-12'>
                        <table className='table table-bordered text-center'>
                            <thead>
                                <tr>
                                    <th>Member</th>
                                    <th>Role</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>Rahul</th>
                                    <th>SD,ML</th>
                                    <tr className='d-flex gap-5 align-items-center justify-content-center'>
                                        <button type='button' className='common-btn'>Edit</button>
                                        <button type='button' className='common-btn' onClick={handleDelete}>Delete</button>
                                    </tr>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddEditForm