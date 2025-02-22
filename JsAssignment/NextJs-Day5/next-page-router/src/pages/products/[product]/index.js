import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
const ProductDetail = () => {
  const router = useRouter();
  const slug = router.query.product;
  const [products, setProducts] = useState([]);
  useEffect(() => {
    if (!slug) return;
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/product');
        const data = await response.json();
        setProducts(data.products);
      } catch (error) {
        console.error('Data is not Found!', error);
      }
    };
    fetchData();
  }, [slug]);
  const product = products.find((prod)=> prod.productID === slug)
  return (
    <div className='wrapper--1'>
      <h1>Product Details {slug}</h1>
      <Link href="/products">Back</Link>
      <h2>{product?.name}</h2>
      <p><strong>Description:</strong> {product?.description}</p>
      <p><strong>Price:</strong> ${product?.price}</p>
      <p><strong>Category:</strong> {product?.category}</p>
      <p><strong>Rating:</strong> {product?.ratings.averageRating} / 5</p>

    </div>
  );
};

export default ProductDetail;
