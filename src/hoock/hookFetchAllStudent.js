import {useEffect, useState} from "react";
import {fetchAllStudent} from "../helper/fetchAllStudent.js";

export function useStudents(retryTrigger = 0) {
    const [students, setStudents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function loadStudents() {
            setLoading(true);
            try {
                return await fetchAllStudent();
            } catch (err) {
                return err.message
            } finally {
                setLoading(false);
            }
        }

        loadStudents().then(data => {
            setStudents(data);
            setError(null);
        }).catch(error => {
            setError(error.message)
            return []
        })
    }, [retryTrigger]);

    return {students, loading, error};
}
