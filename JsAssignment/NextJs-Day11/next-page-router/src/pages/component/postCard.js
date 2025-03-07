import React from "react";

const PostCard = (props)=>{
    return(
        <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <h1 className="text-xl font-semibold text-gray-800 mb-4">{props.title}</h1>
            <p className="text-gray-600">{props.body}</p>
            {props.tags?.map((item,i)=>(
               <span key={i} style={{paddingRight:"10px"}}>{item}</span>
            ))}
        </div>
    )
}

export default PostCard;