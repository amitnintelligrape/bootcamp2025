import React from "react";
import Image from 'next/image';

export async function getStaticProps() {
  // Image URL
  const imageUrl = 'https://dummyjson.com/image/150';

  // Return the URL as part of the props
  return {
    props: {
      imageUrl,    
    },
  };
}

const Images = ({ imageUrl }) => {
  return (
    <div>
      <Image 
        src={imageUrl}
        alt="Image from Dummy JSON API" 
        width={150} 
        height={150}
      />
    </div>
  );
}

export default Images;
