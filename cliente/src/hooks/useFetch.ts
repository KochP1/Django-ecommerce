import { useEffect, useState } from "react";

type Data<T> = T | null;
type ErrorTye = Error | null;

interface Params<T> {
    data: Data<T>
    error: ErrorTye
}

export const useFetch = <T>(url: string, method: string = 'GET', body?: any): Params<T> => {
    const [data, setData] = useState<Data<T>>(null)
    const [error, setError] = useState<ErrorTye>(null)

    useEffect(() => {
        let controller = new AbortController
        const fetchData = async () => {
            try {
                const options: RequestInit = {
                    method,
                    signal: controller.signal,
                    headers: {
                        'Content-Type': 'application/json',
                    },
                };

                if (body && method !== 'GET') {
                    options.body = JSON.stringify(body);
                }

                const response = await fetch(url, options);

                if (!response.ok) {
                    throw new Error(`HTTP ERROR STATUS: ${response.status}` )
                }

                const jsonData: T = await response.json();
                setData(jsonData);
                setError(null);
            } catch (e) {
                setError(e as Error)
            }
        }
        fetchData();
        return () => {
            controller.abort()
        }
    }, [url, method, body])
    
    return { data, error }

}