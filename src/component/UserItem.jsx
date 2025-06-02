import React from "react";

export const UserItem = ({student, onTryUpdate, onTryDelete}) => {

    return (<tr>
        <td>{student.id}</td>
        <td>{student.first_name}</td>
        <td>{student.last_name}</td>
        <td>{student.dni_student}</td>
        <td>{student.career}</td>
        <td>{student.sch_year}</td>
        <td>{student.scholarship?.toString() ?? "true"}</td>
        <td>{student.address}</td>
        <td>
            <img src="/src/assets/img/autorenew_24dp.png" width={24} alt={"update"}
                 onClick={() => onTryUpdate(student.id, student.first_name, student.last_name, student.dni_student, student.career, student.sch_year, student.scholarship, student.address)}/>
        </td>
        <td><img src="/src/assets/img/error_24dp.png" width={24} alt={"delete"} onClick={() => onTryDelete(student.dni_student)}/></td>
    </tr>);
}