import { useEffect, useState } from "react";

interface UseFetchResult<T> {
  data: T | null;
  pending: boolean;
  error: string | null;
}

export default function CustomUseFetch<T>(url: string, options: RequestInit = {}): UseFetchResult<T> {
  const [data, setData] = useState<T | null>(null);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const optionsKey = JSON.stringify(options);

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      setPending(true);
      try {
        const res = await fetch(url, options);
        if (!res.ok) {
          throw new Error(res.statusText);
        }

        const nextData = await res.json();

        if (isMounted) {
          setData(nextData);
          setError(null);
        }
      } catch (e) {
        if (isMounted) {
          setError(`${(e as Error).message}. Some error occurred`);
          setData(null);
        }
      } finally {
        if (isMounted) {
          setPending(false);
        }
      }
    };

    void fetchData();

    return () => {
      isMounted = false;
    };
  }, [url, options, optionsKey]);

  return { data, error, pending };
}
