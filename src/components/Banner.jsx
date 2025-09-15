import React, { useEffect, useState } from 'react';

const Banner = ({bannerUrl}) => {
  
  const tempImage = 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=1200&q=80'

  const [image, setImage] = useState(tempImage);

    useEffect(()=>{
      setImage(`https://image.tmdb.org/t/p/original/${bannerUrl}`)
    })

  return (
    <section className="mx-2 my-4 bg-white rounded-2xl shadow-lg overflow-hidden flex items-center justify-center">
      <img
      loading='lazy'
        src={image}
        alt="Banner"
        className="w-full h-[320px] object-cover rounded-2xl"
      />
    </section>
  );
};

export default Banner;