import {useState} from "react";

export function hookDeleteStudent() {
    const [deleteState, setState] = useState({
        openModal: false,
        loading: false,
        error: "",
        success: null
    });

    const openModal = () => {
        setState({
            ...deleteState,
            openModal: true
        });
    };

    const closeModal = () => {
        setState({
            ...deleteState,
            openModal: false
        });
    };

    const handleDelete = async () => {
        setState({
            ...deleteState,
            loading: true,
            error: ""
        });
        try {
            // Aquí iría tu lógica de eliminación
            setState({
                ...deleteState,
                loading: false,
                success: true
            });
        } catch (err) {
            setState({
                ...deleteState,
                loading: false,
                error: err.message
            });
        }
    };

    return [deleteState, openModal, closeModal, handleDelete];
}