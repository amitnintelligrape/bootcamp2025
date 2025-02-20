import { useEffect, useState } from "react";
import './recipies.css';
//import { ErrorBoundary } from "next/dist/client/components/error-boundary";
export default function Products() {
    const [products, setProducts] = useState([]);
    // useEffect(()=>{
    //     const fetchRecipes = async () => {
    //         const response = await fetch('https://dummyjson.com/recipes');
    //         const data = await response.json();
    //         setProducts(data.products.slice(0,10));
    //     };
    //     fetchRecipes();
    // },[])
    // useEffect(()=>{
    //     fetch('https://dummyjson.com/recipes')
    //     .then((response)=> response.json())
    //     .then((data)=> setProducts(data.products.slice(0,10)))
    //     .catch((error)=> console.error('The Data is Not Found!', error))
    // }, []);
    useEffect(()=>{
        const fetchData = async ()=>{
            try{
                const response = await fetch('https://dummyjson.com/products');
                const data = await response.json();
                setProducts(data.products.slice(0,10));
            }
            catch(error){
                console.error('Data is not Found!', error);
            }
        };
        fetchData();
    },[]);
    return (
      <div className="wrapper--1">
        <h1>Products</h1>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Category</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {products.map((product) => (
                <tr key={product.id}>
                    <td>{product.id}</td>
                    <td>{product.title}</td>
                    <td>{product.description}</td>
                    <td>{product.category}</td>
                    <td>{product.price}</td>
                </tr>
                ))}
            </tbody>
        </table>
      </div>
    );
}