import * as JSON from "postcss";

export const deleteStudent = async (dni) => {

    try {
        const request = await fetch("http://localhost:8081/api/student/", {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                dni_student: dni,
            })
        })

        if (!request.ok) {
            throw new Error(`HTTP error! status: ${request.status}`);
        }
        return await request.json()

    } catch (e) {
        return {
            message: e.message,
            susses: false
        }
    }

}

