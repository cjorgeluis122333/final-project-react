import {Fragment} from "react";
import React from "react";
// import style from "../assets/style/modals.css"
export const ModalFormComponent = ({state,onValueChange,onSubmit,onClose}) => {
    return (
        <Fragment>
            <div className={`modal modal-signin position-static d-block bg-secondary py-5`} tabIndex="-1" role="dialog"
                 id="modalSignin">
                <div className="modal-dialog" role="document">
                    <div className="modal-content rounded-5 shadow">
                        <div className="modal-header p-5 pb-4 border-bottom-0 row">
                            <h2 className="fw-bold mb-0 col-11">Update user</h2>
                            <button
                                type="button" className="btn-close col-1" data-bs-dismiss="modal"
                                    aria-label="Close" onClick={onClose}></button>
                        </div>

                        <div className="modal-body p-5 pt-0">
                            <form className="" onSubmit={onSubmit}>
                                <div className="form-floating mb-3">
                                    <input type="text" className="form-control rounded-4" id="floatingInput"
                                           placeholder="FirstName" name={"first_name"} value={state.first_name} onChange={onValueChange}/>
                                    <label htmlFor="floatingInput">Firstname</label>
                                </div>

                                <div className="form-floating mb-3">
                                    <input type="text" className="form-control rounded-4" id="floatingPassword"
                                           placeholder="LastName"  name={"last_name"} value={state.last_name}  onChange={onValueChange}/>
                                    <label htmlFor="floatingPassword">Lastname</label>
                                </div>

                                <div className="form-floating mb-3">
                                    <input type="text" className="form-control rounded-4" id="student_DNI"
                                           placeholder="Student DNI"  name={"dni_student"} value={state.dni_student}  onChange={onValueChange}/>
                                    <label htmlFor="student_DNI">Student DNI</label>
                                </div>

                                <div className="form-floating mb-3">
                                    <input type="text" className="form-control rounded-4" id="career"
                                           placeholder="career"  name={"career"} value={state.career} onChange={onValueChange}/>
                                    <label htmlFor="career">Career</label>
                                </div>


                                <div className="form-floating mb-3">
                                    <input type="text" className="form-control rounded-4" id="school_year"
                                           placeholder="School year"  name={"sch_year"} value={state.sch_year} onChange={onValueChange}/>
                                    <label htmlFor="school_year">Scholar year</label>
                                </div>


                                <div className="form-floating mb-3">
                                    <input type="text" className="form-control rounded-4" id="address"
                                           placeholder="address"  name={"address"} value={state.address} onChange={onValueChange}/>
                                    <label htmlFor="address">Address</label>
                                </div>


                                <div className="mb-3">
                                    <input type="checkbox" className="form-check-inline rounded-4" id="scholarship"
                                           placeholder="Scholarship"  name={"scholarship"}  checked={state.scholarship} onChange={onValueChange}/>
                                    <label htmlFor="scholarship">Scholarship</label>
                                </div>


                                <button className="w-100 mb-2 btn btn-lg rounded-4 btn-primary" type="submit" onSubmit={onSubmit}>Update
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </Fragment>
    )
}