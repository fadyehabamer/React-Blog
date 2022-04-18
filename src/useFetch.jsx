import { useState, useEffect } from 'react';
const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);

    // useEffect will run every time the component is rendered .. no dependency
    // useEffect with an empty array [] will run only once
    // useEffect with dependecy will run only when the dependency changes

    useEffect(() => {

        setLoading(true);

        fetch(url)
            .then((response) => {
                if (response.ok) {
                    return response.json()
                } else {
                    throw new Error('Something went wrong ...');
                }
            })
            .then((data) => {
                console.log(data);
                setData(data);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
            })
    }, [url]);

    return { data, loading };
}

export default useFetch;