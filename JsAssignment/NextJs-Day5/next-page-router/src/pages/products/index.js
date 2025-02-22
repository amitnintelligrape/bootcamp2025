import { useEffect, useState } from "react";
import ProductCard from "./card";
export default function Products() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
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

    }, []);
    console.log(products);
    return (
      <div className="wrapper--1">
        <h1>Products</h1>
        <div className="inline-flex w-full">
        {products.map((item, index)=>(
            <ProductCard 
                key={index} 
                name={item.name} 
                price={item.price} 
                currency={item.currency} 
                availability={item.availability} 
                id={item.productID}
            />
        ))}
        </div>
        
      </div>
    );
}