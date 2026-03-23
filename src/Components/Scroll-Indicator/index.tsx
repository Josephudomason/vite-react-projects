import { useEffect, useState } from "react"

type Data = {
  id: number;
  title: string;
}

export default function ScrollIndicator({ url }: { url: string }) {
  const [data, setData] = useState<Data[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>('');
  const [scrollPosition, setScrollPosition] = useState<number>(0);

  async function fetchData(getUrl: string): Promise<void> {

    try {
      setLoading(true);
      const res = await fetch(getUrl);
      const data = await res.json()


      if (data && data.products && data.products.length > 0) {
        setData(data.products);
        setLoading(false);
      };

    } catch (e: unknown) {
      console.log(e)
      setErrorMsg(e instanceof Error ? e.message : 'An unknown error occurred')

    }
  }

  useEffect(() => {
    fetchData(url);
  }, [url])

  function handleScroll() {
    console.log(document.body.scrollTop,
      document.documentElement.scrollTop,
      document.documentElement.scrollHeight,
      document.documentElement.clientHeight)

    const howMuchScrolled =
      document.body.scrollTop || document.documentElement.scrollTop;

    const height =
      document.documentElement.scrollHeight - document.documentElement.clientHeight;

    setScrollPosition((howMuchScrolled / height) * 100)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener(
        'scroll', () => { }
        // 'scroll', handleScroll
      )
    }
  }, [])




  console.log(data, loading)

  if (errorMsg) {
    return <div>Error ! {errorMsg} </div>
  }

  if (loading) {
    return <div>Loading data ! Please wait</div>
  }


  return (
    <div className="text-center gap-5 flex flex-col items-center justify-center">
      <div className="fixed top-0 z-10  w-full text-center bg-blue-950 space-y-5">
        <h1 className="text-white mt-5"> Custon Scroll Indicator</h1>
        <div className="w-full h-2 bg-blue-500">
          <div className="h-2 bg-purple-500 w-0"
            style={{ width: `${scrollPosition}%` }}></div>
        </div>
      </div>
      <div className="mt-20">
        {
          data && data.length > 0 ?
            data.map((item) => <p key={item.id}>{item.title}</p>)
            : null
        }
      </div>
    </div>
  )
}
