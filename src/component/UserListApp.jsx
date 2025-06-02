import React, {Fragment, useCallback, useState} from "react";
import {UserItem} from "./UserItem.jsx";
import {ModalFormComponent} from "./ModalFormComponent.jsx";
import {ModalDeleteUser} from "./ModalDeleteUser.jsx";
import {hookUpdateUser} from "../hoock/hookUpdateUser.js";
import {useStudents} from "../hoock/hookFetchAllStudent.js";
import ErrorScreen from "./ErrorScreen.jsx";
import {FloatingActionButton} from "./FloatingActionButton.jsx";
import {hookDeleteStudent} from "../hoock/hookDeleteStudent.js";
import {ModalFormComponentInsert} from "./ModalFormComponentInsert.jsx";
import {useInsertStudent} from "../hoock/hookInsertStudent.js";


export const UserListApp = () => {
    const [retryCount, setRetryCount] = useState(0);

    const handleRetry = useCallback(() => {
        setRetryCount(prev => prev + 1);
    }, []);


    const [updateState, onValueChange, onSubmit, onClose, onOpen] = hookUpdateUser(handleRetry);

    const {students, loading, error} = useStudents(retryCount);

    const [deleteState, onOpenDeleteModal, onCloseDeleteModal, handleDelete] = hookDeleteStudent(handleRetry);

    const [insertState, openModalInsert, onValueChangeInsert, closeModalInsert, handleCreate] = useInsertStudent(handleRetry)

    if (loading) return <p className="text-center mt-4">Cargando estudiantes...</p>;
    if (error) return <ErrorScreen message={error} onRetry={handleRetry}/>;

    return (
        <Fragment>
       <h1 className={"display-2 p-2 text-center"}>Student Handler</h1>
            {!updateState.isOpen && !deleteState.openModal && !insertState.isOpen && (
                <div className="container">
                    <table className="table table-active table-dark table-hover table-responsive-md">
                        <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nombre</th>
                            <th>Apellido</th>
                            <th>DNI</th>
                            <th>Carrera</th>
                            <th>Año</th>
                            <th>Beca</th>
                            <th>Dirección</th>
                            <th>Modificar</th>
                            <th>Borrar</th>
                        </tr>
                        </thead>
                        <tbody>
                        {students.map(student => (
                            <UserItem
                                key={student.id}
                                student={student}
                                onTryUpdate={onOpen}
                                onTryDelete={onOpenDeleteModal}
                            />
                        ))}
                        </tbody>
                    </table>
                    <FloatingActionButton onClick={openModalInsert}/>

                </div>
            )}

            {updateState.isOpen && (
                <ModalFormComponent
                    onSubmit={onSubmit}
                    onValueChange={onValueChange}
                    state={updateState}
                    onClose={onClose}
                    onRefresh={handleRetry}
                />
            )}
            {updateState.error && (
                <div className="alert alert-danger text-center">{updateState.error}</div>
            )}

            {deleteState.openModal && (
                <ModalDeleteUser
                    onCloseModal={onCloseDeleteModal}
                    onDelete={handleDelete}
                    isLoading={deleteState.loading}
                    error={deleteState.error}
                />
            )}
            {deleteState.error && (
                <div className="alert alert-danger text-center">{deleteState.error}</div>
            )}

            {insertState.isOpen && (
                <ModalFormComponentInsert
                    onValueChange={onValueChangeInsert}
                    state={insertState}
                    onSubmit={handleCreate}
                    onClose={closeModalInsert}
                />
            )}
            {insertState.error && (
                <div className="alert alert-danger text-center">{insertState.error}</div>
            )}

        </Fragment>
    );
};