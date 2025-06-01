
export async function fetchAllStudent() {
    try {
        const response = await fetch("http://localhost:8081/api/student/all");

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error("Failed to fetch students:", error);
        return [];
    }
}
