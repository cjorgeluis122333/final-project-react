import {useState} from "react";
import {updateStudent} from "../helper/updateStudent.js";

export const hookUpdateUser = () => {

    const [state, setState] = useState({
        id: "0",
        first_name: "",
        last_name: "",
        dni_student: "",
        career: "",
        sch_year: 1,
        scholarship: false,
        address: "",
        isOpen: false,
        isLoading: false,
        error: "",
        susses: undefined

    })


    const onValueChange = ({target}) => {
        if (target.name === "scholarship") {
            const newState = {
                ...state, [target.name]: target.checked, error: ""
            }
            setState(newState)
        } else {

            const newState = {
                ...state, [target.name]: target.value, error: ""
            }
            setState(newState)
        }
    }
    const onSubmit = (event) => {
        event.preventDefault()
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
            async function onUpdate() {
                setState({...state, isLoading: true})
                try {
                    await updateStudent({
                        id: state.id,
                        first_name: state.first_name,
                        last_name: state.last_name,
                        dni_student: state.dni_student,
                        career: state.career,
                        sch_year: state.sch_year,
                        scholarship: state.scholarship,
                        address: state.address
                    })
                    setState({
                        ...state, error: null, susses: true, isOpen: false
                    })
                } catch (e) {
                    setState({
                        ...state, error: e.message
                    })
                } finally {
                    if (state.susses) {
                        setState({...state, isLoading: false, susses: null, isOpen: false})
                    } else {
                        setState({...state, isLoading: false, susses: null})

                    }

                }

            }

            onUpdate()
        }

    }

    const onClose = () => {
        setState({
            ...state, isOpen: false
        })
    }

    const onOpen = (id, first_name, last_name, dni_student, career, sch_year, scholarship, address) => {
        setState({
            ...state,
            id: id,
            first_name: first_name,
            last_name: last_name,
            dni_student: dni_student,
            career: career,
            sch_year: sch_year,
            scholarship: scholarship,
            address: address,
            isOpen: true
        })
    }


    return [state, onValueChange, onSubmit, onClose, onOpen]


}
