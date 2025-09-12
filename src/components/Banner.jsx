import React from 'react';

const Banner = ({
  image = 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=1200&q=80',
  title = 'Inception',
  description = 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO.'
}) => {
  return (
    <section className="relative w-full aspect-video rounded-2xl shadow-lg overflow-hidden mb-8">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover"
      />
      <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 via-black/40 to-transparent px-8 py-6">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 drop-shadow-lg">{title}</h2>
        <p className="text-sm md:text-base text-slate-200 max-w-lg drop-shadow">{description}</p>
      </div>
    </section>
  );
};

export default Banner;