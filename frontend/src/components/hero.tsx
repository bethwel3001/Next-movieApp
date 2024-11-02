const Hero = () => {
    return (
      <section className="hero bg-hero-pattern p-10 text-center">
        <h1 className="text-5xl font-bold">Welcome.</h1>
        <p className="text-lg mt-2">Millions of movies and TV shows to discover. Explore now.</p>
        <div className="mt-4">
          <input type="text" placeholder="Search for a movie, TV show, person..." className="search-input" />
          <button className="search-btn">Search</button>
        </div>
      </section>
    );
  };
  
  export default Hero;
  