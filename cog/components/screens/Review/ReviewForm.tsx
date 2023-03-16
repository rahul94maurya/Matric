import React from 'react'
import './style.css'

const ReviewForm = () => {
    return (
        <>
            <div className="container ">
                <div className='row m-0'>
                    <div className='col-lg-12'>
                        <div className='form-group'>
                            <div className='row'>
                                <div className='col-lg-3'>
                                    <div className='form-label'>
                                        <div className='d-flex align-items-center gap-3'>
                                            <span className='form-label fw-bold'>Name : </span>
                                            <span>
                                                <p className='form-label'>Namita</p>
                                            </span>
                                        </div>
                                    </div>

                                </div>
                                <div className='col-lg-3'>
                                    <div className='form-label'>
                                        <div className='d-flex align-items-center gap-3'>
                                            <span className='form-label fw-bold'>Start Date : </span>
                                            <span>
                                                <p className='form-label'>01-03-2023</p>
                                            </span>
                                        </div>
                                    </div>
                                </div>


                            </div>

                            <div className='row'>
                                <div className='col-lg-3'>
                                    <div className='form-label'>
                                        <div className='d-flex align-items-center gap-3'>
                                            <span className='form-label fw-bold'>Sprint No : </span>
                                            <span>
                                                <p className='form-label'>1</p>
                                            </span>
                                        </div>
                                    </div>

                                </div>
                                <div className='col-lg-3'>
                                    <div className='form-label'>
                                        <div className='d-flex align-items-center gap-3'>
                                            <span className='form-label fw-bold'>Due Date : </span>
                                            <span>
                                                <p className='form-label'>07-03-2023</p>
                                            </span>
                                        </div>
                                    </div>
                                </div>


                            </div>

                            <div className='row'>
                                <div className='col-lg-3'>
                                    <div className='form-label'>
                                        <div className='d-flex align-items-center gap-3'>
                                            <span className='form-label fw-bold'>Roll : </span>
                                            <span>
                                                <p className='form-label'>SD , ML </p>
                                            </span>
                                        </div>
                                    </div>

                                </div>
                                <div className='col-lg-3'>
                                    <div className='form-label'>
                                        <div className='d-flex align-items-center gap-3'>
                                            <span className='form-label fw-bold'>Ticket No : </span>
                                            <span>
                                                <p className='form-label'>125</p>
                                            </span>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className='row m-0'>
                    <div className='col-lg-12'>
                        <form autoComplete="off">
                            <div className='form-group'>
                                <div className='mt-3 fw-bold form-label'>Communication </div>
                                <p className="para-text">Attributes for Communication : Being Context Aware , Communication Proficiency , Proactive and effective communication , Transparency </p>
                                <div className='row'>
                                    <div className='col-lg-3'>Q.1 :  XYZ</div> 
                                    {/* <div className="col-lg-3 rating"> <input type="radio" name="rating" value="5" id="5"/><label htmlFor="5">☆</label> <input type="radio" name="rating" value="4" id="4"/><label htmlFor="4">☆</label> <input type="radio" name="rating" value="3" id="3"/><label htmlFor="3">☆</label> <input type="radio" name="rating" value="2" id="2"/><label htmlFor="2">☆</label> <input type="radio" name="rating" value="1" id="1"/><label htmlFor="1">☆</label> </div> */}
                                    <div className="col-lg-3 input-rate"><input type="text" /></div>
                                </div>
                                <div className='row'>
                                    <div className='col-lg-3'>Q.2 :  ABC</div> 
                                    {/* <div className="col-lg-3 rating"> <input type="radio" name="rating" value="5" id="5"/><label htmlFor="5">☆</label> <input type="radio" name="rating" value="4" id="4"/><label htmlFor="4">☆</label> <input type="radio" name="rating" value="3" id="3"/><label htmlFor="3">☆</label> <input type="radio" name="rating" value="2" id="2"/><label htmlFor="2">☆</label> <input type="radio" name="rating" value="1" id="1"/><label htmlFor="1">☆</label> </div> */}
                                    <div className="col-lg-3 input-rate"><input type="text" /></div>
                                </div>
                                <div>Comment : </div><textarea name="comment" id=""></textarea>

                                <div className='mt-3 fw-bold form-label'>Accountability </div>
                                <p className="para-text">Attributes for Accountability : Learnability , Code/Tool/Stack Exploration , Process adherence , Time Responsible(self and others) , Skills Development , Professionalism </p>
                                <div className='row'>
                                    <div className='col-lg-3 '>Q.1 :  XYZ</div> 
                                    {/* <div className="col-lg-3 rating"> <input type="radio" name="rating" value="5" id="5"/><label htmlFor="5">☆</label> <input type="radio" name="rating" value="4" id="4"/><label htmlFor="4">☆</label> <input type="radio" name="rating" value="3" id="3"/><label htmlFor="3">☆</label> <input type="radio" name="rating" value="2" id="2"/><label htmlFor="2">☆</label> <input type="radio" name="rating" value="1" id="1"/><label htmlFor="1">☆</label> </div> */}
                                    <div className="col-lg-3 input-rate"><input type="text" /></div>
                                </div>
                                <div className='row'>
                                    <div className='col-lg-3 '>Q.2 :  ABC</div> 
                                    {/* <div className="col-lg-3 rating"> <input type="radio" name="rating" value="5" id="5"/><label htmlFor="5">☆</label> <input type="radio" name="rating" value="4" id="4"/><label htmlFor="4">☆</label> <input type="radio" name="rating" value="3" id="3"/><label htmlFor="3">☆</label> <input type="radio" name="rating" value="2" id="2"/><label htmlFor="2">☆</label> <input type="radio" name="rating" value="1" id="1"/><label htmlFor="1">☆</label> </div> */}
                                    <div className="col-lg-3 input-rate"><input type="text" /></div>
                                </div>
                                <div>Comment : </div><textarea name="comment" id=""></textarea>

                                <div className='mt-3 fw-bold form-label'>Quality </div>
                                <p className="para-text">Attributes for Quality : Technical Aptitude , Output Quality , Code Coverage , Code Review Points , Task Breakdown Comprehensiveness</p>
                                <div className='row'>
                                    <div className='col-lg-3 '>Q.1 :  XYZ</div> 
                                    {/* <div className="col-lg-3 rating"> <input type="radio" name="rating" value="5" id="5"/><label htmlFor="5">☆</label> <input type="radio" name="rating" value="4" id="4"/><label htmlFor="4">☆</label> <input type="radio" name="rating" value="3" id="3"/><label htmlFor="3">☆</label> <input type="radio" name="rating" value="2" id="2"/><label htmlFor="2">☆</label> <input type="radio" name="rating" value="1" id="1"/><label htmlFor="1">☆</label> </div> */}
                                    <div className="col-lg-3 input-rate"><input type="text" /></div>
                                </div>
                                <div className='row'>
                                    <div className='col-lg-3'>Q.2 :  ABC</div> 
                                    {/* <div className="col-lg-3 rating"> <input type="radio" name="rating" value="5" id="5"/><label htmlFor="5">☆</label> <input type="radio" name="rating" value="4" id="4"/><label htmlFor="4">☆</label> <input type="radio" name="rating" value="3" id="3"/><label htmlFor="3">☆</label> <input type="radio" name="rating" value="2" id="2"/><label htmlFor="2">☆</label> <input type="radio" name="rating" value="1" id="1"/><label htmlFor="1">☆</label> </div> */}
                                    <div className="col-lg-3 input-rate"><input type="text" /></div>
                                </div>
                                <div>Comment : </div><textarea name="comment" id=""></textarea>


                                <div className='mt-3 fw-bold form-label'>Outcomes </div>
                                <p className="para-text">Attributes for Outcomes : Throughput , No Of Story Points Cover , Estimation Accuracy , Sprint Velocity </p>
                                <div className='row'>
                                    <div className='col-lg-3'>Q.1 :  XYZ</div> 
                                    {/* <div className="col-lg-3 rating"> <input type="radio" name="rating" value="5" id="5"/><label htmlFor="5">☆</label> <input type="radio" name="rating" value="4" id="4"/><label htmlFor="4">☆</label> <input type="radio" name="rating" value="3" id="3"/><label htmlFor="3">☆</label> <input type="radio" name="rating" value="2" id="2"/><label htmlFor="2">☆</label> <input type="radio" name="rating" value="1" id="1"/><label htmlFor="1">☆</label> </div> */}
                                    <div className="col-lg-3 input-rate"><input type="text" /></div>
                                </div>
                                <div className='row'>
                                    <div className='col-lg-3'>Q.2 :  ABC</div> 
                                    {/* <div className="col-lg-3 rating"> <input type="radio" name="rating" value="5" id="5"/><label htmlFor="5">☆</label> <input type="radio" name="rating" value="4" id="4"/><label htmlFor="4">☆</label> <input type="radio" name="rating" value="3" id="3"/><label htmlFor="3">☆</label> <input type="radio" name="rating" value="2" id="2"/><label htmlFor="2">☆</label> <input type="radio" name="rating" value="1" id="1"/><label htmlFor="1">☆</label> </div> */}
                                    <div className="col-lg-3 input-rate"><input type="text" /></div>
                                </div>
                                <div>Comment : </div><textarea name="comment" id=""></textarea>

                                <div className='mt-3 fw-bold form-label'>Ownership </div>
                                <p className="para-text">Attributes for Ownership : Going Beyond , Team/Client Rapport , Team Building , Accelerators , Collaborative Problem Solving </p>
                                <div className='row'>
                                    <div className='col-lg-3'>Q.1 :  XYZ</div> 
                                    {/* <div className="col-lg-3 rating"> <input type="radio" name="rating" value="5" id="5"/><label htmlFor="5">☆</label> <input type="radio" name="rating" value="4" id="4"/><label htmlFor="4">☆</label> <input type="radio" name="rating" value="3" id="3"/><label htmlFor="3">☆</label> <input type="radio" name="rating" value="2" id="2"/><label htmlFor="2">☆</label> <input type="radio" name="rating" value="1" id="1"/><label htmlFor="1">☆</label> </div> */}
                                    <div className="col-lg-3 input-rate"><input type="text" /></div>
                                </div>
                                <div className='row'>
                                    <div className='col-lg-3'>Q.2 :  ABC</div> 
                                    {/* <div className="col-lg-3 rating"> <input type="radio" name="rating" value="5" id="5"/><label htmlFor="5">☆</label> <input type="radio" name="rating" value="4" id="4"/><label htmlFor="4">☆</label> <input type="radio" name="rating" value="3" id="3"/><label htmlFor="3">☆</label> <input type="radio" name="rating" value="2" id="2"/><label htmlFor="2">☆</label> <input type="radio" name="rating" value="1" id="1"/><label htmlFor="1">☆</label> </div> */}
                                    <div className="col-lg-3 input-rate"><input type="text" /></div>
                                </div>
                                <div>Comment : </div><textarea name="comment" id=""></textarea>

                            </div>
                            <div className='col-lg-3'>
                               <button className='mt-3 w-100 common-btn'>Submit</button>
                            </div>
                            
                        </form>
                    </div>
                </div>



            </div>


        </>
    )
}

export default ReviewForm
