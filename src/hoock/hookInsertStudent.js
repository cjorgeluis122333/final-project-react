// src/hooks/useCreateStudent.jsx
import {useState} from "react";
import {createStudent} from "../helper/insertStudent.js";

export function useInsertStudent(onRefresh) {
    const [state, setState] = useState({
        first_name: "",
        last_name: "",
        dni_student: "",
        career: "",
        sch_year: 1,
        scholarship: false,
        address: "",
        isOpen: false,
        isLoading: false,
        error: null,
        susses: undefined
    });

    const onValueChange = ({target}) => {
        if (target.name === "scholarship") {
            const newState = {
                ...state, [target.name]: target.checked, error: null
            }
            setState(newState)
        } else {
            const newState = {
                ...state, [target.name]: target.value, error: null
            }
            setState(newState)
        }
    }

    const openModal = () => {
        setState({
            ...state,
            isOpen: true,
            isLoading: false,
            error: null
        });
    };

    const closeModal = () => {
        setState(({...state, isOpen: false, error: null}));
    };

    const handleCreate = (event) => {
        event.preventDefault()
        setState({...state, isLoading: true, error: null});
        if (state.first_name.length < 3) {
            setState({
                ...state,
                isLoading: false,
                susses: undefined,
                error: "The student firstname should has more than 3 character"
            })
        } else if (state.last_name.length < 3) {
            setState({
                ...state,
                isLoading: false,
                susses: undefined,
                error: "The student lastname should has more than 3 character"
            })
        } else if (state.career.length < 1) {
            setState({
                ...state, isLoading: false, susses: undefined, error: "The student career can not by empty"
            })
        } else if (parseInt(state.sch_year) < 0) {
            setState({
                ...state, isLoading: false, susses: undefined, error: "The student career year can not by negative"
            })
        } else {

            const update = async () => {
                return await createStudent({
                    first_name: state.first_name,
                    last_name: state.last_name,
                    dni_student: state.dni_student,
                    career: state.career,
                    sch_year: state.sch_year,
                    scholarship: state.scholarship,
                    address: state.address
                });

            };

            update().then(() => {
                    setState({
                        ...state,
                        isOpen: false,
                        isLoading: false,
                        error: null,
                        susses: true,
                        address: "",
                        career: "",
                        dni_student: "",
                        last_name: "",
                        sch_year: 1,
                        first_name: "",
                        scholarship: false
                    })
                    onRefresh()
                }
            ).catch((e) => {
                setState(({...state, isLoading: false, error: e.message}))
            })
        }
    }

    return [
        state,
        openModal,
        onValueChange,
        closeModal,
        handleCreate,
    ];
}
