export const deleteStudent = async (dni) => {

    try {
        const request = await fetch(`http://localhost:8081/api/student/?dni=${dni}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            }
        })

        if (!request.ok) {
            throw new Error(`HTTP error! status: ${request.status}`);
        }


    } catch (e) {
        return {
            message: e.message,
            susses: false
        }
    }

}

