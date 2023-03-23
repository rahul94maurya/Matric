import React, { useState } from 'react'
import { useAppSelector } from '../../../redux/store'
import { textValidation } from '../../../utility/textValidation'
import './style.css'


interface FormState {
    teamMember: string;
    checkboxes: string[];
    moduleLeadName: string;
    addEditTeam: boolean;
    addEditSprint: boolean;
    performance: boolean
}

const initialState: FormState = {
    teamMember: "",
    checkboxes: [],
    moduleLeadName: "",
    addEditTeam: false,
    addEditSprint: false,
    performance: false
}

const AddEditForm = () => {
    const teams = useAppSelector((state) => state.teams.teams);
    const [form, setForm] = useState({ ...initialState })
    const [errorObj, setErrorObj] = useState<any>({})



    const handleDelete = (id: any, name: string) => {
        // console.log("id",id)
        alert(`Are you sure to delete it ${name} records`)
    }

    const handleEdit = (id: number) => {
        // console.log("id",id)
    }
    const handleModal = (e: any) => {

    }

    const handleInputChange = (e: any) => {
        let { name, value, checked } = e.target;
        setForm({
            ...form,
            [name]: value
        })
        teamValidation(name, value, checked)
    }

    const handleCheckboxChange = (e: any) => {
        let errors = { ...errorObj }
        let { checked, value, name } = e.target;
        let updateCheckbox = [...form.checkboxes];
        if (checked) {
            updateCheckbox.push(value);
            errors[e.target.name] = e.target.checked ? "" : "Please select at least one role"
        } else {
            updateCheckbox = updateCheckbox.filter((val) => val !== value);
        }
        setForm({
            ...form,
            checkboxes: updateCheckbox
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


    const teamValidation = (name: string, value: any, checked: any) => {
        let hasError = false;
        let error = { ...errorObj }
        const numChecked = Object.values(form.checkboxes).filter(Boolean).length
        setErrorObj({
            ...errorObj,
            [name]: ""
        })
        if (!name && !value && !checked) {

            if (!form?.teamMember) {
                error[`teamMember`] = "Team member name is required"
                hasError = true
            }
            if (!form.moduleLeadName) {
                error[`moduleLeadName`] = "Module lead name is required"
                hasError = true
            }
            if (numChecked == 0) {
                error[`checkboxes`] = "Please select at least one role"
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
        let { name, value, checked } = e.target
        e.preventDefault()
        if (teamValidation(name, value, checked)) {
            return
        }
        console.log("formdata", form)
    }



    return (
        <>
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
                                <button className='common-btn' onClick={handleModal} data-bs-toggle="modal" data-bs-target="#exampleModal" >Add Member</button>
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



            <div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true" >
                <form autoComplete='off'>
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
                                            <input type="text" name="teamMember" placeholder='Enter your team member name' className='form-control' onChange={handleInputChange} />
                                            {errorObj && errorObj[`teamMember`] && <span className='errorMsg'>{errorObj[`teamMember`]}</span>}
                                        </div>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-lg-12'>
                                        <div className='d-flex align-items-center gap-3 mt-3'>
                                            <label className='fs-5'>Role:</label>

                                            <input type="checkbox" className='form-check-input check' id="softwareDeveloper" name="checkboxes" checked={form.checkboxes.includes("softwareDeveloper")} value="softwareDeveloper" onChange={handleCheckboxChange} />
                                            <label className='form-check-label'>SD</label>
                                            <input type="checkbox" className='form-check-input check' id="moduleLead" name="checkboxes" checked={form.checkboxes.includes("moduleLead")} value="moduleLead" onChange={handleCheckboxChange} />
                                            <label className='form-check-label'>MD</label>
                                            <input type="checkbox" className='form-check-input check' id="deliveryLead" name="checkboxes" checked={form.checkboxes.includes("deliveryLead")} value="deliveryLead" onChange={handleCheckboxChange} />
                                            <label className='form-check-label'>DL</label>
                                            {errorObj && errorObj[`checkboxes`] && <span className='errorMsg'>{errorObj[`checkboxes`]}</span>}
                                        </div>
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
                                            <input type="checkbox" className='form-check-input' name="addEditTeam" checked={form?.addEditTeam} onChange={handleSwitchCheckboxChange} />
                                        </div>
                                    </div>
                                </div>

                                <div className='row'>
                                    <div className='col-lg-12 mt-3 d-flex align-items-center gap-5'>
                                        <label className='fs-5'>Allow member to add/edit sprint:</label>
                                        <div className='form-check form-switch'>
                                            <input type="checkbox" className='form-check-input' name="addEditSprint" checked={form?.addEditSprint} onChange={handleSwitchCheckboxChange} />
                                        </div>
                                    </div>
                                </div>

                                <div className='row'>
                                    <div className='col-lg-12 mt-3 d-flex align-items-center gap-4'>
                                        <label className='fs-5'>Allow member to see performance:</label>
                                        <div className='form-check form-switch ms-2'>
                                            <input type="checkbox" className='form-check-input' name="performance" checked={form?.performance} onChange={handleSwitchCheckboxChange} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="common-btn" data-bs-dismiss="modal">Close</button>
                                <button type="button" className="common-btn" onClick={handleAddSubmit}>Save</button>
                            </div>
                        </div>
                    </div>
                </form>

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