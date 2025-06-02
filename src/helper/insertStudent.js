/*
export const insertStudent = async (student) => {

    try {
        const request = await fetch("http://localhost:8081/api/student/", {
            method: 'POST',
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
*/
export async function createStudent(newStudent) {
  const res = await fetch("http://localhost:8081/api/student/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newStudent),
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Error ${res.status}: ${text}`);
  }
  return await res.json();
}
