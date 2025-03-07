import React from "react";
import PostCard from "../component/postCard";
const Posts = ({posts})=>{
    return(
        <div className="p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts?.map((post)=>(
            <PostCard key={post.id} title={post.title} body={post.body} tags={post.tags}/>
        ))}
        </div>
    )
}

export async function getStaticProps() {
    const response = await fetch('https://dummyjson.com/posts');
    const data = await response.json();
    const posts = data.posts;
    return{
        props: {
            posts
        },
        revalidate: 60,
    }
}

export default Posts;