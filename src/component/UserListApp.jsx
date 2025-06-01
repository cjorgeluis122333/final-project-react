import React, {Fragment, useCallback, useState} from "react";
import {UserItem} from "./UserItem.jsx";
import {ModalFormComponent} from "./ModalFormComponent.jsx";
import {ModalDeleteUser} from "./ModalDeleteUser.jsx";
import {hookUpdateUser} from "../hoock/hookUpdateUser.js";
import {useStudents} from "../hoock/hookFetchAllStudent.js";
import ErrorScreen from "./ErrorScreen.jsx";
import {hookDeleteStudent} from "../hoock/hookDeleteStudent.js";


export const UserListApp = () => {
    const [deleteState, onOpenDeleteModal, onCloseDeleteModal, handleDelete] = hookDeleteStudent();
    const [state, onValueChange, onSubmit, onClose, onOpen] = hookUpdateUser();

    const [retryCount, setRetryCount] = useState(0);
    const {students, loading, error} = useStudents(retryCount);

    const handleRetry = useCallback(() => {
        setRetryCount(prev => prev + 1);
    }, []);
    if (loading) return <p className="text-center mt-4">Cargando estudiantes...</p>;
    if (error) return <ErrorScreen message={error} onRetry={handleRetry}/>;

    return (
        <Fragment>
            {/* Tabla de usuarios */}
            {!state.isOpen && !deleteState.openModal && (
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
                </div>
            )}

          

            {state.isOpen && (
                <ModalFormComponent
                    onSubmit={onSubmit}
                    onValueChange={onValueChange}
                    state={state}
                    onClose={onClose}
                />
            )}

            {deleteState.openModal && (
                <ModalDeleteUser
                    onCloseModal={onCloseDeleteModal}
                    onDelete={handleDelete}
                    isLoading={deleteState.loading}
                    error={deleteState.error}
                />
            )}
        </Fragment>
    );
};