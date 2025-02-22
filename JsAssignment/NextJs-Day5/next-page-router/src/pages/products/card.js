import Link from "next/link";
import React from "react";
const generateLink = (linkName) => {
    return linkName.replace(/\s+/g, '-').toLowerCase();
};
export default function productCard(props){
    return(
        <div className="flex-grow border rounded border-black m-3 p-4">
            <p><Link href={`products/${props.id}`}>{props.name}</Link></p>
            <p>{props.price} {props.currency}</p>
            {props.availability ? 'instock':'out of stock'}
        </div>
    );
}