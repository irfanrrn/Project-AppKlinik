const InformationComponent = () => {
    return (
        <section className="cta">
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-md-4">
                        <div className="cta-block emergency item">
                            <i className="fa fa-phone" />
                            <h2>Emergency Cases</h2>
                            <h3>1-800-700-6200</h3>
                            <p>This service is only available during clinic operational hours.
                            </p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="cta-block top-doctor item text-center">
                            <i className=" fa fa-hourglass-half"></i>
                            <h2>working hours</h2>
                            <h4>Monday - Friday</h4>
                            <p>
                            08.00 AM - 16.00 PM
                            </p>
                            <p>
                            08.00 AM - 16.00 PM
                            </p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="cta-block working-time item">
                            <i className="fa fa-bookmark"></i>
                            <h2>our facilities</h2>
                            <ul className="w-hours">
                                <li>
                                6 <span>Experienced Doctor</span>
                                </li>
                                <li>
                                20 <span>Rooms
                                Available</span>
                                </li>
                                <li>
                                IGD <span>Emergency Departments</span>
                                </li>
                                <li>
                                <i className="fa fa-capsules fs-5"></i> <span>Pharmacy & LAB</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default InformationComponent;