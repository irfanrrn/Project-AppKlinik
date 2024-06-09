import about1 from '../assets/img/about-1.jpg'

const AbouthomeComponent = () => {
    return (
        <section className="about section-padding bg-white" id="about">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-12 col-12">
                        <div className="aboutimg">
                            <img alt="" className="img-fluid rounded-image" src={about1} />
                        </div>
                    </div>
                    <div className="col-lg-8 col-md-12 col-12 ps-lg-5">
                        <div className="about-text">
                        <h3>ABOUT US</h3>
                        <p>
                        Welcome to Our Clinic, where you can get quality 
                        and trusted health care. We are a clinic committed 
                        to providing the best health services for the whole family. 
                        With a team of professional doctors and medical personnel, 
                        we are here to meet your health needs with friendly, fast, 
                        and precise service.
                        </p>
                        <a className="btn btn-primary" href=" ">
                            Read More
                        </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default AbouthomeComponent;