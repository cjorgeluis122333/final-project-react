import React, {Fragment} from "react";

export const ModalDeleteUser = ({ onCloseModal, onDelete, isLoading, error }) => {
    return (
        <Fragment>
            <div className="modal modal-alert position-static d-block bg-secondary py-5"
                 tabIndex="-1" role="dialog" id="modalChoice">
                <div className="modal-dialog modal-alert" role="document">
                    <div className="modal-content rounded-4 shadow">
                        <div className="modal-body p-4 text-center">
                            <h5 className="mb-0">Eliminar Usuario</h5>
                            <p className="mb-0">¿Está seguro que desea eliminar este usuario? Esta acción no puede deshacerse.</p>
                            {error && <div className="alert alert-danger">{error}</div>}
                        </div>
                        <div className="modal-footer flex-nowrap p-0">
                            <button
                                type="button"
                                className="btn btn-lg btn-outline-danger fs-6 text-decoration-none col-6 m-0 rounded-0 border-right"
                                onClick={onDelete}
                                disabled={isLoading}
                            >
                                <strong>{isLoading ? 'Eliminando...' : 'Eliminar'}</strong>
                            </button>
                            <button
                                type="button"
                                onClick={onCloseModal}
                                className="btn btn-lg btn-outline-secondary fs-6 text-decoration-none col-6 m-0 rounded-0"
                            >
                                Cancelar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};