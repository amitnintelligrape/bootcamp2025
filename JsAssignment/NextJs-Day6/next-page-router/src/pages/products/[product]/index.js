import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
const ProductDetail = () => {
  const router = useRouter();
  const slug = router.query.product;
  useEffect(() => {
    async function fetchData(){
      let response = await fetch(`https://dummyjson.com/products/${slug}`);
      response = await response.json();
      setProducts(response);
    }
    fetchData();
  }, [router.query.product]);
  const [products, setProducts] = useState({});
  return (
    <div className='wrapper--1'>
      <h1>Product Details</h1>
      <Link href="/products">Back</Link>
      {products &&
        <><h2>{products?.title}</h2>
        <p><strong>Description:</strong> {products?.description}</p>
        <p><strong>Price:</strong> ${products?.price}</p>
        <p><strong>Category:</strong> {products?.category}</p></>
     }
    </div>
  );
};

export default ProductDetail;
