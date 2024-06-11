import hero1 from "../assets/img/hero1.jpg";

const HeroesComponent = () => {
  return (
    <div id="hero-carousel" className="carousel slide">
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#hero-carousel"
          data-bs-slide-to={0}
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        />
        <button
          type="button"
          data-bs-target="#hero-carousel"
          data-bs-slide-to={1}
          aria-label="Slide 2"
        />
        <button
          type="button"
          data-bs-target="#hero-carousel"
          data-bs-slide-to={2}
          aria-label="Slide 3"
        />
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={hero1} className="d-block w-100" alt="hero1"/>
            <div className="carousel-caption">
              <h1>"YOUR HEALTH IS OUR PRIORITY"</h1>
              <p>Our Clinic, where you can get quality and trusted health care. 
                We are a clinic committed to providing the best health services for the whole family.</p>
                <a href="..." className ="btn appo-hero">APPOINTMENT</a>
            </div>
        </div>
        <div className="carousel-item">
          <img src={hero1} className="d-block w-100" alt="hero2" />
            <div className="carousel-caption">
              <h1>"Schedule an appointment with your preferred doctor"</h1>
              <p>Your health is our priority.
                Find a convenient time for your consultation.</p>
                <a href="..." className ="btn appo-hero">Doctor Schedule</a>
            </div>
        </div>
        <div className="carousel-item">
          <img src={hero1} className="d-block w-100" alt="hero3" />
            <div className="carousel-caption">
              <h1>"Discover our story and our commitment to your health."</h1>
              <p>We invite you to learn more about how we strive to be your healthcare provider of choice.</p>
              <a href="..." className ="btn appo-hero">About Us</a>
            </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#hero-carousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#hero-carousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>  
  );
};

export default HeroesComponent;
