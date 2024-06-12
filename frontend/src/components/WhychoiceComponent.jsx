import information1 from '../assets/img/information1.jpg';

const WhychoiceComponent = () => {
    return(
        <div className="container-fluid whychoose-container">
            <div className="container whychoose">
                <div className="row row-whychoose">
                    <div className="col-lg-6 whychoose-text">
                        <div className="p-lg-5 ps-lg-0">
                            <h1>WHY CHOOSE US</h1>
                            <p>
                            At our Clinic we are committed to providing the best and 
                            most comprehensive healthcare services for you and your family.
                            </p>
                            <div className="row g-4">
                                <div className="col-md-6">
                                    <div className="row-single">
                                        <div
                                        className="circle-whychoose flex-shrink-0 rounded-circle">
                                        6
                                        </div>
                                        <div className="row-caption">
                                            <p>Experience</p>
                                            <h5>Doctors</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="row-single">
                                        <div
                                        className="circle-whychoose flex-shrink-0 rounded-circle"
                                        >
                                        20
                                        </div>
                                        <div className="row-caption">
                                            <p>Examination</p>
                                            <h5>Room Available</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="row-single">
                                        <div
                                        className="circle-whychoose flex-shrink-0 rounded-circle"
                                        >
                                            <i className="fa fa-capsules fs-5 text-primary"></i>
                                        </div>
                                        <div className="row-caption">
                                            <p>Pharmacy</p>
                                            <h5>& LAB</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="row-single">
                                        <div className="circle-whychoose flex-shrink-0 rounded-circle">
                                            IGD
                                        </div>
                                        <div className="row-caption">
                                            <p>Emergency</p>
                                            <h5>Departements</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 whychoose-pictur" style={{ minHeight: 400 }}>
                        <div className="whychoosepic-wrap">
                            <img
                                className="img-fluid"
                                src={information1}
                                alt="doctor"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default WhychoiceComponent;