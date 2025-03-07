import React, {useEffect, useState} from "react";

const Products = () => {
    const [columns, setColumns] = useState([]);
    const [productData, setProductData] = useState(null);

    useEffect(()=>{
        const fetchData = async () =>{
            try{
                const response = await fetch('https://dummyjson.com/products',{
                    cache: 'force-cache',
                });
                const data = await response.json();
                setColumns(Object.keys(data.products[0]))
                setProductData(data.products)
            }catch(error){
                console.error('Error fetching data:', error);
            }
        }
        fetchData();
    },[])
    return(
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
                {productData?.map((item)=>(
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.title}</td>
                        <td>{item.description}</td>
                        <td>{item.category}</td>
                        <td>{item.price}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default Products;