import { useState, useEffect } from 'react';
const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // useEffect will run every time the component is rendered .. no dependency
    // useEffect with an empty array [] will run only once
    // useEffect with dependecy will run only when the dependency changes

    useEffect(() => {
        // abort the request if the component unmounts or the url changes,
        // so a stale response can't overwrite newer state
        const controller = new AbortController();

        setLoading(true);
        setError(null);

        fetch(url, { signal: controller.signal })
            .then((response) => {
                if (response.ok) {
                    return response.json()
                } else {
                    throw new Error(`Request failed with status ${response.status}`);
                }
            })
            .then((data) => {
                setData(data);
                setLoading(false);
            })
            .catch((error) => {
                if (error.name === 'AbortError') return;
                setError(error.message);
                setLoading(false);
            })

        return () => controller.abort();
    }, [url]);

    return { data, loading, error };
}

export default useFetch;