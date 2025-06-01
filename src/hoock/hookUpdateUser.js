import {useState} from "react";

export const hookUpdateUser = () => {

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
        error: "",
        susses: undefined

    })


    const onValueChange = ({target}) => {
        if (target.name === "scholarship") {
            const newState = {
                ...state,
                [target.name]: target.checked,
                error: ""
            }
            setState(newState)
        } else {

            const newState = {
                ...state,
                [target.name]: target.value,
                error: ""
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
                ...state,
                isLoading: false,
                susses: undefined,
                error: "The student career can not by empty"
            })
        } else if (parseInt(state.sch_year) < 0) {
            setState({
                ...state,
                isLoading: false,
                susses: undefined,
                error: "The student career year can not by negative"
            })
        } else {
            setState({
                ...state,
                isLoading: false,
                susses: true,
                error: ""
            })
        }

    }

    const onClose = () => {
        setState({
            ...state,
            isOpen: false
        })
    }

    const onOpen = (first_name,
                    last_name,
                    dni_student,
                    career, sch_year,
                    scholarship,
                    address
    ) => {
        setState({
            ...state,
            first_name: first_name,
            last_name: last_name,
            career: career,
            sch_year: sch_year,
            scholarship: scholarship,
            address: address,
            isOpen: true
        })
    }


    return [state, onValueChange, onSubmit, onClose, onOpen]


}
