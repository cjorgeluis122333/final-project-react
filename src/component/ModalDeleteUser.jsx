import React, {Fragment} from "react";

export const ModalDeleteUser = () => {
    return (<Fragment>

        <div className="modal modal-alert position-static d-block bg-secondary py-5" tabIndex="-1" role="dialog"
             id="modalChoice">
            <div className="modal-dialog modal-alert " role="document">
                <div className="modal-content rounded-4 shadow">
                    <div className="modal-body p-4 text-center">
                        <h5 className="mb-0">Delete user</h5>
                        <p className="mb-0">Are you sure you want delete this user. This action can not reverted</p>
                    </div>
                    <div className="modal-footer flex-nowrap p-0">
                        <button type="button"
                                className="btn btn-lg btn-outline-danger fs-6 text-decoration-none col-6 m-0 rounded-0 border-right">
                            <strong>Delete</strong></button>
                        <button type="button"
                                className="btn btn-lg btn-outline-secondary fs-6 text-decoration-none col-6 m-0 rounded-0"
                                data-bs-dismiss="modal">Cansel
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </Fragment>)


}