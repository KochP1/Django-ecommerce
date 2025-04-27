import { useEffect, useState } from "react";

type Data<T> = T | null;
type ErrorTye = Error | null;

interface Params<T> {
    data: Data<T>
    error: ErrorTye
}

export const useFetch = <T>(url: string): Params<T> => {
    const [data, setData] = useState<Data<T>>(null)
    const [error, setError] = useState<ErrorTye>(null)

    useEffect(() => {
        let controller = new AbortController
        const fetchData = async () => {
            try {
                const response = await fetch(url);

                if (response.ok) {
                    const jsonData: T = await response.json();
                    setData(jsonData);
                    setError(null);
                }
            } catch (e) {
                setError(e as Error)
            }
        }
        fetchData();
        return () => {
            controller.abort()
        }
    }, [url])
    
    return { data, error }

}