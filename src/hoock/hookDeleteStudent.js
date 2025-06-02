import {useState} from "react";
import {deleteStudent} from "../helper/deleteStudent.js";

export function hookDeleteStudent(handleRetry) {

    const [deleteState, setState] = useState({
        openModal: false, loading: false, dni_student: "", error: "", success: null
    });

    const openModal = (dni) => {
        setState({
            ...deleteState, dni_student: dni, openModal: true
        });
    };

    const closeModal = () => {
        setState({
            ...deleteState, openModal: false
        });
    };
    const handleDelete = () => {
        const onDelete = async () => {
            try {
                await deleteStudent(deleteState.dni_student)
            } catch (e) {
                setState({...deleteState, error: e.message})
            }

            setState({
                ...deleteState, loading: true, error: ""
            });
            try {
                // Aquí iría tu lógica de eliminación
                setState({
                    ...deleteState, loading: false, success: true
                });
            } catch (err) {
                setState({
                    ...deleteState, loading: false, error: err.message
                });
            }
        };
        onDelete().then(() => {
                setState({
                    ...deleteState,
                    openModal: false
                })
                handleRetry()
            }
        )
    }
    return [deleteState, openModal, closeModal, handleDelete];
}