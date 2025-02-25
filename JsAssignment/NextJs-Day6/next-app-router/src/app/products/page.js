// Client-side Fetching
"use client";
import React, { useState, useEffect } from 'react';
import ProductCard from './card';

const Products = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('https://dummyjson.com/products');
      const result = await res.json();
      setData(result.products);  // Assuming the data is under the `products` key
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h1>Products</h1>
      {data?.map((item, index) => {
        return (
          <ProductCard key={index} id={item.id} title={item.title} price={item.price} stock={item.stock} />
        );
      })}
    </div>
  );
};

export default Products;
