import cust1 from "../assets/img/cust1.jpg"
const TestiComponent = () => {
    return (
        <section className="testimonial" id="reviewcust">
            <div className="container my-5 py-4 shadow">
                <h1>REVIEWS PATIENT</h1>
                <div id="testi-carousel" className="carousel slide">
                    <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="items">
                            <img src={cust1} className="shadow" alt="customer1" />
                            <h4 className="mt-3">Alisa Gracia</h4>
                            <div className="stars">
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                            </div>
                            <q>
                                It gives me great confidence in the
                                quality of the product &amp; the assurance that dev product will be
                                around for years to come.
                            </q>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="items">
                            <img src={cust1} className="shadow" alt="customer2" />
                            <h4 className="mt-3">Khalid Gracia</h4>
                            <div className="stars">
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                            </div>
                            <q>
                                The best thing about Dev is the community and the great developers
                                behind this ingenious software. It gives me great confidence in the
                                quality of the product &amp; the assurance that dev product will be
                                around for years to come.
                            </q>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="items">
                            <img
                                src={cust1}
                                className="shadow"
                                alt="customer3"
                            />
                            <h4 className="mt-3">Linda Gracia</h4>
                            <div className="stars">
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                            </div>
                            <q>
                                It gives me great confidence in the
                                quality of the product &amp; the assurance that dev product will be
                                around for years to come.
                            </q>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="items">
                            <img src={cust1} className="shadow" alt="customer4" />
                            <h4 className="mt-3">Hover Antony</h4>
                            <div className="stars">
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                            </div>
                            <q>
                                The best thing about Dev is the community and the great developers
                                behind this ingenious software. It gives me great confidence in the
                                quality of the product &amp; the assurance that dev product will be
                                around for years to come.
                            </q>
                        </div>
                    </div>
                    </div>
                    <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target="#testi-carousel"
                        data-bs-slide="prev"
                    >
                        <span className="carousel-control-prev-icon" aria-hidden="true" />
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target="#testi-carousel"
                        data-bs-slide="next"
                    >
                        <span className="carousel-control-next-icon" aria-hidden="true" />
                        <span className="visually-hidden">Next</span>
                    </button>
                    <div className="carousel-indicators">
                    <button
                        type="button"
                        data-bs-target="#testi-carousel"
                        data-bs-slide-to={0}
                        className="active"
                        aria-current="true"
                        aria-label="Slide 1"
                    />
                    <button
                        type="button"
                        data-bs-target="#testi-carousel"
                        data-bs-slide-to={1}
                        aria-label="Slide 2"
                    />
                    <button
                        type="button"
                        data-bs-target="#testi-carousel"
                        data-bs-slide-to={2}
                        aria-label="Slide 3"
                    />
                    <button
                        type="button"
                        data-bs-target="#testi-carousel"
                        data-bs-slide-to={3}
                        aria-label="Slide 4"
                    />
                    </div>
                </div>
                </div>
            </section>
    );
};
export default TestiComponent;
