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

// export const deleteStudent = async (dni) => {
//     const response = await fetch(`http://localhost:8081/api/student/?dni=${dni}`, {
//         method: 'DELETE',
//         headers: { 'Content-Type': 'application/json' }
//     });
//     if (!response.ok) {
//         const text = await response.text();
//         throw new Error(`Error ${response.status}: ${text}`);
//     }
//     return true;
// };
