import React, { useState } from 'react'
import { useAppSelector } from '../../../redux/store'
import { textValidation } from '../../../utility/textValidation'
import './style.css'


interface FormState {
    teamMember: string;
    role: string[];
    moduleLeadName: string;
    allowAddEditTeams: boolean;
    allowAddEditSprint: boolean;
    allowToSeePerformance: boolean
}

const initialState: FormState = {
    teamMember: "",
    role: [],
    moduleLeadName: "",
    allowAddEditTeams: false,
    allowAddEditSprint: false,
    allowToSeePerformance: false
}

const AddEditForm = () => {
    const teams = useAppSelector((state) => state.teams.teams);
    const [form, setForm] = useState({ ...initialState })
    const [errorObj, setErrorObj] = useState<any>({})

    const [showModal, setShowModal] = useState({
        openModal: false,
        editModal: false
    });

    const handleShowModal = () => {
        setShowModal({
            ...showModal,
            openModal: true
        });
    };

    const handleHideModal = () => {
        setShowModal({
            ...showModal,
            openModal: false
        });
    };


    const handleDelete = (id: any, name: string) => {
        // console.log("id",id)
        alert(`Are you sure to delete it ${name} records`)
    }


    const handleInputChange = (e: any) => {
        let { name, value } = e.target;
        setForm({
            ...form,
            [name]: value
        })
        teamValidation(name, value)
    }

    const handleCheckboxChange = (e: any) => {
        let errors = { ...errorObj }
        let { checked, value } = e.target;
        let updateCheckbox = [...form.role];
        if (checked) {
            updateCheckbox.push(value);
            errors[e.target.name] = e.target.checked ? "" : "Please select at least one role"
        } else {
            updateCheckbox = updateCheckbox.filter((val) => val !== value);
        }
        setForm({
            ...form,
            role: updateCheckbox
        })
        setErrorObj({ ...errors })
    }
    const handleSwitchCheckboxChange = (e: any) => {
        const { name, checked } = e.target;
        setForm({
            ...form,
            [name]: checked
        })
    }


    const teamValidation = (name: string, value: any) => {
        let hasError = false;
        let error = { ...errorObj }
        const numChecked = Object.values(form.role).filter(Boolean).length
        setErrorObj({
            ...errorObj,
            [name]: ""
        })
        if (!name && !value) {

            if (!form?.teamMember) {
                error[`teamMember`] = "Team member name is required"
                hasError = true
            }
            if (!form.moduleLeadName) {
                error[`moduleLeadName`] = "Module lead name is required"
                hasError = true
            }
            if (numChecked == 0) {
                error[`role`] = "Please select at least one role"
                hasError = true
            }

            setErrorObj({ ...error })
            return hasError;
        }
        else {
            if (name) {
                if (form.teamMember) {
                    if (value == "") {
                        setErrorObj({
                            ...errorObj,
                            [name]: "Enter your team member name"
                        })
                    } else if (!textValidation(value)) {
                        setErrorObj({
                            ...errorObj,
                            [name]: "Please enter only alphabets"
                        })
                    }
                }


                if (form.moduleLeadName) {
                    if (value == "") {
                        setErrorObj({
                            ...errorObj,
                            [name]: "Enter your module lead name"
                        })
                    } else if (!textValidation(value)) {
                        setErrorObj({
                            ...errorObj,
                            [name]: "Please enter only alphabets"
                        })
                    }
                }


            }
            return hasError
        }

    }

    const handleAddSubmit = (e: any) => {
        let { name, value } = e.target
        e.preventDefault()
        if (teamValidation(name, value)) {
            return
        }
        setShowModal({
            ...showModal,
            openModal: false
        })
        setForm({ ...initialState })
        console.log("formdata", form)
    }

    const handleEdit = (id: number,name:string) => {
        console.log("id",id,name)
        setShowModal({
            ...showModal,
            editModal: true
        })
    }

    const handleEditCloseModal = () => {
        setShowModal({
            ...showModal,
            editModal: false
        })
    }


    const renderEditModal = () => {
        return (
            <>
                <div className="modal d-block" id="exampleModalEdit" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Update Team Member</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={handleEditCloseModal}></button>
                            </div>
                            <div className="modal-body">
                                <div className='row'>
                                    <div className='col-lg-12'>
                                        <div className=''>
                                            <label className='fs-5'>Name:</label>
                                            <input type="text" name="" placeholder='Enter your team member name' className='form-control' />
                                        </div>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-lg-12'>
                                        <div className='d-flex align-items-center gap-3 mt-3'>
                                            <label className='fs-5'>Role:</label>

                                            <input type="checkbox" className='form-check-input check' />
                                            <label className='form-check-label'>SD</label>
                                            <input type="checkbox" className='form-check-input check' />
                                            <label className='form-check-label'>MD</label>
                                            <input type="checkbox" className='form-check-input check' />
                                            <label className='form-check-label'>DL</label>

                                        </div>
                                    </div>
                                </div>

                                <div className='row'>
                                    <div className='col-lg-12 mt-3'>
                                        <label>If only SD,then name ML:</label>
                                        <input type="text" className='form-control' placeholder='Enter Module Lead name' />
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
                                <button type="button" className="common-btn" data-bs-dismiss="modal" onClick={handleEditCloseModal}>Close</button>
                                <button type="button" className="common-btn">Save</button>
                            </div>
                        </div>
                    </div>
                </div>

            </>
        )
    }

    return (
        <>
            {showModal?.editModal && renderEditModal()}
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-12'>
                        <div className='form-group'>
                            <div className='d-flex justify-content-between flex-wrap'>

                                <div className='form-label'>
                                    <div className='d-flex align-items-center gap-3'>
                                        <span className='form-label mt-3 fw-bold'>Project Name:</span>
                                        <span>
                                            <input type="text" className='form-control' placeholder='Project Name' />
                                        </span>
                                    </div>
                                </div>
                                <button className='common-btn' onClick={handleShowModal} >Add Member</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='row mt-5'>
                    <div className='col-lg-12 table-responsive'>
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
                                                        <button className='common-btn' type='button' onClick={() => handleEdit(i?.id,i?.name)}>Edit</button>
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


            {showModal?.openModal && (
                <div className="modal d-block" tabIndex={-1} role="dialog" aria-hidden="true" >
                    <div className="modal-dialog" role="document">
                        <form autoComplete='off'>
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">Add Team Member</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={handleHideModal}></button>
                                </div>
                                <div className="modal-body">
                                    <div className='row'>
                                        <div className='col-lg-12'>
                                            <div className=''>
                                                <label className='fs-5'>Name:</label>
                                                <input type="text" name="teamMember" placeholder='Enter your team member name' className='form-control' onChange={handleInputChange} />
                                                {errorObj && errorObj[`teamMember`] && <span className='errorMsg'>{errorObj[`teamMember`]}</span>}
                                            </div>
                                        </div>
                                    </div>


                                    <div className='row'>
                                        <div className='col-lg-12'>
                                            <div className='d-flex align-items-center gap-3 mt-3'>
                                                <label className='fs-5'>Role:</label>

                                                <input type="checkbox" className='form-check-input check' id="SD" name="role" checked={form.role.includes("SD")} value="SD" onChange={handleCheckboxChange} />
                                                <label className='form-check-label'>SD</label>
                                                <input type="checkbox" className='form-check-input check' id="ML" name="role" checked={form.role.includes("ML")} value="ML" onChange={handleCheckboxChange} />
                                                <label className='form-check-label'>ML</label>
                                                <input type="checkbox" className='form-check-input check' id="DL" name="role" checked={form.role.includes("DL")} value="DL" onChange={handleCheckboxChange} />
                                                <label className='form-check-label'>DL</label>
                                            </div>
                                            {errorObj && errorObj[`role`] && <span className='errorMsg'>{errorObj[`role`]}</span>}
                                        </div>
                                    </div>

                                    <div className='row'>
                                        <div className='col-lg-12 mt-3'>
                                            <label>If only SD,then name ML:</label>
                                            <input type="text" className='form-control' name="moduleLeadName" placeholder='Enter Module Lead name' onChange={handleInputChange} />
                                            {errorObj && errorObj[`moduleLeadName`] && <span className='errorMsg'>{errorObj[`moduleLeadName`]}</span>}
                                        </div>
                                    </div>

                                    <div className='row'>
                                        <div className='col-lg-12 mt-3 d-flex align-items-center gap-5'>
                                            <label className='fs-5'>Allow member to add/edit team:</label>
                                            <div className='form-check form-switch ms-1'>
                                                <input type="checkbox" className='form-check-input' name="allowAddEditTeams" checked={form?.allowAddEditTeams} onChange={handleSwitchCheckboxChange} />
                                            </div>
                                        </div>
                                    </div>

                                    <div className='row'>
                                        <div className='col-lg-12 mt-3 d-flex align-items-center gap-5'>
                                            <label className='fs-5'>Allow member to add/edit sprint:</label>
                                            <div className='form-check form-switch'>
                                                <input type="checkbox" className='form-check-input' name="allowAddEditSprint" checked={form?.allowAddEditSprint} onChange={handleSwitchCheckboxChange} />
                                            </div>
                                        </div>
                                    </div>

                                    <div className='row'>
                                        <div className='col-lg-12 mt-3 d-flex align-items-center gap-4'>
                                            <label className='fs-5'>Allow member to see performance:</label>
                                            <div className='form-check form-switch ms-2'>
                                                <input type="checkbox" className='form-check-input' name="allowToSeePerformance" checked={form?.allowToSeePerformance} onChange={handleSwitchCheckboxChange} />
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="common-btn" data-dismiss="modal" onClick={handleHideModal}>Close</button>
                                    <button type="button" className="common-btn" onClick={handleAddSubmit}>Save</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            )}

        </>
    )
}

export default AddEditForm