import React from "react";
export default function productCard(props){
    return(
        <div className="flex-grow border rounded border-black m-3 p-4">
            <p>{props.title}</p>
            <p>{props.price}</p>
            {props.stock ? 'instock':'out of stock'}
        </div>
    );
}