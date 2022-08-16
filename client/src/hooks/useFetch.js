import { useEffect, useState } from "react"

export const useFetch = (url, method, body) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(url, {
            method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(body),
        })
            .then(res => res.json())
            .then(res => setData(Object.values(res)))
    }, [body, method, url])

    return [data, setData];
}