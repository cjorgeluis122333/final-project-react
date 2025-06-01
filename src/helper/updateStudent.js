import * as JSON from "postcss";

export const updateStudent = async (student) => {

    try {
        const request = await fetch("http://localhost:8081/api/student/", {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(student)
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

/*Body
{   "id":"5",
		"first_name": "Jogre Jose",
		"last_name": "Castillo",
		"dni_student": "14",
		"career": "Civernetica",
		"sch_year": 2,
		"scholarship": false,
		"address": "Uclv morales"
	}

* */