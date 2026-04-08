import { useEffect, useState } from "react"

type ProductType = {
  id: number;
  title: string;
  description: string;
  price: number;
  category: string;
  thumbnail: string;
}

function LoadMoreData() {

  const [loading, setLoading] = useState<boolean>(false);
  const [products, setProducts] = useState<ProductType[]>([]);
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    let isMounted = true;

    const fetchProducts = async (): Promise<void> => {
      try {
        setLoading(true);
        const response = await fetch(`https://dummyjson.com/products?limit=20&skip=${count === 0 ? 0 : count * 20}`);
        const result = await response.json();

        if (isMounted && result?.products?.length) {
          setProducts((prevData) => [...prevData, ...result.products]);
        }
      } catch (e: unknown) {
        console.log(e);
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    void fetchProducts();

    return () => {
      isMounted = false;
    };
  }, [count]);

  const disableButton = products.length >= 180;

  if (loading) {
    return <div className="h-screen flex items-center justify-center">Loading data ! Please wait.</div>
  }

  return (
    <div className="flex flex-col gap-5 mt-10 px-2 md:px-10 lg:px-20">
      <div className="grid grid-cols-4 gap-5">
        {
          products && products.length ?
            products.map((item) =>
              <div className="flex flex-col p-5 border text-center gap-5" key={item.id}>
                <img src={item.thumbnail} alt={item.title} />
                <p>{item.title}</p>
                <p className="text-sm text-gray-500">{item.category}</p>
                <span className="font-bold">
                  ${item.price}
                </span>
              </div>
            )
            : null
        }
      </div>
      <div className="flex flex-col items-center mt-10">
        <button className={` ${disableButton ? 'text-gray-500 line-through' : 'text-black active:text-amber-500'}`} disabled={disableButton} onClick={() => {
          setCount((prevCount) => prevCount + 1);
        }}>Load More Products</button>

        {
          disableButton ? <p className="mt-5 text-center">No more products to load.</p> : null
        }
      </div>
    </div>
  )
}

export default LoadMoreData
