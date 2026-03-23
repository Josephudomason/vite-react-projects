import { useRef } from "react";
import CustomUseFetch from "../use-fetch";

interface ProductsResponse {
  products: Array<{
    id: number;
    title: string;
  }>;
}

export default function ScrollToTopAndBottom() {
  const { data, pending, error } = CustomUseFetch<ProductsResponse>("https://dummyjson.com/products?limit=100", {});

  //const bottomRef = useRef(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  function handleScrollToTop() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }

  function handleScrollToBottom() {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  if (pending) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error} </div>;
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="bg-black w-full h-7 text-xl text-white text-center font-bold">Scroll to Top And Bottom</h1>
      <h3 className="font-light mt-8">This is the top section</h3>
      <button
        onClick={handleScrollToBottom}
        className="bg-black hover:bg-white hover:text-black text-white py-0.5 px-2 rounded mb-5 cursor-pointer duration-200 hover:shadow-lg">Scroll to Bottom</button>

      <ul className="text-center">
        {
          data && data.products && data.products.length ? data.products.map((item) =>
            <li key={item.id}>{item.title} </li>
          ) : null
        }
      </ul>
      <button
        onClick={handleScrollToTop}
        className="bg-black cursor-pointer duration-200 hover:shadow-lg hover:bg-white hover:text-black text-white py-0.5 px-2 rounded mt-5">Scroll to Top</button>
      <div ref={bottomRef}></div>
      <h3
        className="font-light">This is the bottom section of the page</h3>
    </div >
  );
}
