import CustomUseFetch from ".";

type Product = {
  id: number;
  title: string;
  // add other fields as needed
};

type ProductsResponse = {
  products: Product[];
};

export default function UseFetchHookTest() {
  const { data, pending, error } = CustomUseFetch<ProductsResponse>("https://dummyjson.com/products");
  return (
    <div>
      <h1>Use Fetch Hook</h1>
      {
        pending ? <h3>Pending ! Please wait</h3> : null
      }
      {
        error ? <h3>{error}</h3> : null
      }
      {
        data && data.products && data.products.length ?
          data.products.map(productItem => <p key={productItem.id}>{productItem.title}</p>) : null
      }
    </div>
  )
}
