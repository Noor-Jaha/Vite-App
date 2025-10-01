

const HeroSection = () => {
  return (
    <main>
  <div className="hero-section main"> 
    <div className="container grid grid-two-cols">
      <div className="hero-content">
         <h1 className="heading=xl">
          Explore the World, One Country at a Time.
         </h1>
         <p className='paragraph'>
                    Discover the history,culture, and beauty of every nation. Sort, search, and filter through countries to find the details you need.
                  </p>
                  <button className="btn btn-darken btn-inline bg-white-box">
                    Start Exploring 
                  </button>
      </div>
      <div className="hero-image">
         <img src="https://png.pngtree.com/png-vector/20190716/ourlarge/pngtree-world-tour-icon-for-your-project-png-image_1545388.jpg" alt="wolrd tour image" className="banner-image"/>
      </div>
    </div>
  </div>
</main>
  )
}

export default HeroSection