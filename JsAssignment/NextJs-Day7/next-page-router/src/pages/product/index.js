import React, { useReducer } from 'react';

const initialState = {
  items: [],
};
const productReducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_PRODUCTS':
        return {
         ...state,
         items: action.payload
        };

    case 'ADD_PRODUCT':
        const productExists = state.items.some(product => product.id === action.payload.id);

        if (productExists) {
            return state;
        }

        return {
            ...state,
            items: [...state.items, action.payload]
        };

    case 'DELETE_PRODUCT':
        return {
            ...state,
            items: state.items.filter(product => product.id !== action.payload)
        };

    default:
        return state;
    }
};

export default function Product() {
  const [state, dispatch] = useReducer(productReducer, initialState);
  const getProducts = () => {
    const fetchedProducts = [
      { id: 1, name: 'Laptop', price: 999 },
      { id: 2, name: 'Phone', price: 599 },
      { id: 3, name: 'Tablet', price: 399 }
    ];
    dispatch({ type: 'FETCH_PRODUCTS', payload: fetchedProducts });
    
  };
  const addProduct = (newProduct) => {
    dispatch({ type: 'ADD_PRODUCT', payload: newProduct });
  };

  const deleteProduct = (id) => {
    dispatch({ type: 'DELETE_PRODUCT', payload: id });
  };
  
  return (
    <div>
      <h1>Product Management</h1>
      <button onClick={getProducts}>Get Products</button>
      <div>
        <button
          onClick={() =>
            addProduct({ id: 4, name: 'Smartwatch', price: 199 })
          }
        >
          Add Product
        </button>
      </div>
      <div>
        <h2>Product List</h2>
        {state?.items &&
        <ul>
          {state?.items.map((product) => (
            <li key={product.id}>
              {product.name} - ${product.price}{' '}
              <button onClick={() => deleteProduct(product.id)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
        }
      </div>
    </div>
  );
};
