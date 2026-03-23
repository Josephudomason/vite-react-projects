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

  async function fetchData() {
    setPending(true);
    try {
      const res = await fetch(url, options);
      if (!res.ok) throw new Error(res.statusText);

      const data = await res.json();
      setData(data);
      setError(null);
    } catch (e) {
      setError(`${(e as Error).message}. Some error occurred`);
      setData(null);
    } finally {
      setPending(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, [url, JSON.stringify(options)]);

  return { data, error, pending };
}
