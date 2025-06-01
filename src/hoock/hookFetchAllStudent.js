import { useEffect, useState } from "react";
import {fetchAllStudent} from "../helper/fetchAllStudent.js";

export function useStudents(retryTrigger = 0) {
    const [students, setStudents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function loadStudents() {
            setLoading(true);
            try {
                const data = await fetchAllStudent();
                setStudents(data);
                setError(null);
                // eslint-disable-next-line no-unused-vars
            } catch (err) {
                setError("We can not connect with the server");
                setStudents([]);
            } finally {
                setLoading(false);
            }
        }

        loadStudents();
    }, [retryTrigger]);

    return { students, loading, error };
}
