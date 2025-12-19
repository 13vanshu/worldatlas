import { useState, useEffect} from "react";

function usefetch(url) {
    const [data, setData] = useState([]);
    const [load, setLoading] = useState(true);
    const [error, setError] = useState("");

    async function fetchData() {
        try {
            setLoading(true);
            const res = await fetch(url);
            const json = await res.json();
            setData(json);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchData();
    }, [url]);

    return { data, load, error };
}

export default usefetch;
