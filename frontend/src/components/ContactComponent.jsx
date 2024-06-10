const ContactComponent = () => {
    return(
        <div className="Emergency_contact">
          <div className="container-fluid p-0">
            <div className="row no-gutters">
              <div className="col-xl-6">
                <div className="single_emergency emergency_bg_1">
                  <div className="info">
                    <h3>FOR MORE INFORMATION</h3>
                    <p>+0012 3456 7890</p>
                  </div>
                </div>
              </div>
              <div className="col-xl-6">
                <div className="single_emergency emergency_bg_2">
                  <div className="info">
                    <h3>FOR MESSAGES AND SUGGESTIONS</h3>
                    <p>infoghealth@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
};
export default ContactComponent;