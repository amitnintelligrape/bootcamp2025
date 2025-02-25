import ProductCard from "./card";
import { useRouter } from "next/router";

const Product = ({ productList }) => {
  const router = useRouter();

  return (
    <>
    <h1>Product List: Server components. </h1>
      {productList?.map((prod) => (
        <div key={prod.id}>
            <ProductCard product={prod} title={prod.title} id={prod.id} price={prod.price} stock={prod.stock}/>
        </div>
      ))}
    </>
  );
};

export const getServerSideProps = async (context) => {  
  const res = await fetch(`https://dummyjson.com/products`);
  const data = await res.json();
  return {
    props: {
      productList: data.products,
    }
  };
};

export default Product;
