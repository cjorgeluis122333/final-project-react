import React, {Fragment} from "react";

export const UserItem = ({student}) => {

    return (
        <tr>
            <td>{student.id}</td>
            <td>{student.first_name}</td>
            <td>{student.last_name}</td>
            <td>{student.dni_student}</td>
            <td>{student.career}</td>
            <td>{student.sch_year}</td>
            <td>{student.scholarship?.toString() ?? "Sin beca"}</td>
            <td>{student.address}</td>
        </tr>
    );}