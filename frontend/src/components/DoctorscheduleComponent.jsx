import { useNavigate } from "react-router-dom";
import dokterImg from "../assets/img/dokter/dr.agus.jpg";
import dokterImg1 from "../assets/img/dokter/dr.maya.jpg";
import dokterImg2 from "../assets/img/dokter/dr.budi.jpg";
import dokterImg3 from "../assets/img/dokter/dr.andi.jpg";
import dokterImg4 from "../assets/img/dokter/dr.sinta.jpg";
import dokterImg5 from "../assets/img/dokter/dr.rina.jpg";

import { FaSearch } from "react-icons/fa";

const DoctorscheduleComponent = () => {
  const navigate = useNavigate();

  const handleSearchClick = () => {
    // Tambahkan logika pencarian di sini
    console.log("Search button clicked");
  };

  const handleBookNowClick = () => {
    navigate("/appointment");
  };

  return (
    <>
      <div
        className="container-fluid page-header3 py-5 mb-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container7 py-5">
          <h1 className="display-3 text-white mb-3 animated slideInDown">
            Doctor's Schedule
          </h1>
        </div>
      </div>

      <div className="container" id="container-search">
        <div className="search-container">
          <input type="text" placeholder="Search" />
          <button className="search-btn" onClick={handleSearchClick}>
            <FaSearch />
          </button>
        </div>
      </div>

      <section className="doctor-profile">
        <div className="profile-container">
          <div className="profile-image">
            <img src={dokterImg} alt="Dr. Agus Widodo" />
          </div>
          <div className="profile-details">
            <h2>Dr. Agus Widodo, M.D.</h2>
            <p style={{ color: "#fff" }}>General Specialist</p>
            <p style={{ color: "#fff" }}>6 years experience</p>
            <p>Service Time</p>
            <p style={{ color: "#fff" }}>Monday - Friday</p>
            <p style={{ color: "#fff" }}>08.00 - 16.00 WIB</p>
            <button className="book-btn" onClick={handleBookNowClick}>
              Book Now
            </button>
          </div>
        </div>
        <div className="profile-container">
          <div className="profile-image">
            <img src={dokterImg1} alt="Dr. Maya Putri" />
          </div>
          <div className="profile-details">
            <h2>Dr. Maya Putri, Sp.JP</h2>
            <p style={{ color: "#fff" }}>Heart Specialist</p>
            <p style={{ color: "#fff" }}>8 years experience</p>
            <p>Service Time</p>
            <p style={{ color: "#fff" }}>Monday - Friday</p>
            <p style={{ color: "#fff" }}>08.00 - 16.00 WIB</p>
            <button className="book-btn" onClick={handleBookNowClick}>
              Book Now
            </button>
          </div>
        </div>
        <div className="profile-container">
          <div className="profile-image">
            <img src={dokterImg2} alt="Dr. Budi santoso" />
          </div>
          <div className="profile-details">
            <h2>Dr. Budi Santoso, Sp.A</h2>
            <p style={{ color: "#fff" }}>Pediatric Specialist</p>
            <p style={{ color: "#fff" }}>7 years experience</p>
            <p>Service Time</p>
            <p style={{ color: "#fff" }}>Monday - Friday</p>
            <p style={{ color: "#fff" }}>08.00 - 16.00 WIB</p>
            <button className="book-btn" onClick={handleBookNowClick}>
              Book Now
            </button>
          </div>
        </div>
        <div className="profile-container">
          <div className="profile-image">
            <img src={dokterImg3} alt="Dr. Andi Pratama" />
          </div>
          <div className="profile-details">
            <h2>Dr. Andi Pratama, Sp.OG</h2>
            <p style={{ color: "#fff" }}>Gynecology Specialist</p>
            <p style={{ color: "#fff" }}>5 years experience</p>
            <p>Service Time</p>
            <p style={{ color: "#fff" }}>Monday - Friday</p>
            <p style={{ color: "#fff" }}>08.00 - 16.00 WIB</p>
            <button className="book-btn" onClick={handleBookNowClick}>
              Book Now
            </button>
          </div>
        </div>
        <div className="profile-container">
          <div className="profile-image">
            <img src={dokterImg4} alt="Dr. Sinta Dewi" />
          </div>
          <div className="profile-details">
            <h2>Dr. Sinta Dewi, Sp.KJ</h2>
            <p style={{ color: "#fff" }}>Psychology Specialist</p>
            <p style={{ color: "#fff" }}>4 years experience</p>
            <p>Service Time</p>
            <p style={{ color: "#fff" }}>Monday - Friday</p>
            <p style={{ color: "#fff" }}>08.00 - 16.00 WIB</p>
            <button className="book-btn" onClick={handleBookNowClick}>
              Book Now
            </button>
          </div>
        </div>
        <div className="profile-container">
          <div className="profile-image">
            <img src={dokterImg5} alt="Dr. Rina Sari" />
          </div>
          <div className="profile-details">
            <h2>Dr. Rina Sari, Sp.Pros</h2>
            <p style={{ color: "#fff" }}>Dental and Oral Specialist</p>
            <p style={{ color: "#fff" }}>3 years experience</p>
            <p>Service Time</p>
            <p style={{ color: "#fff" }}>Monday - Friday</p>
            <p style={{ color: "#fff" }}>08.00 - 16.00 WIB</p>
            <button className="book-btn" onClick={handleBookNowClick}>
              Book Now
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default DoctorscheduleComponent;
