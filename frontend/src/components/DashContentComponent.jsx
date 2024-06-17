import doctorImg1 from "../assets/img/dokter/dr.rina.jpg";
import doctorImg2 from "../assets/img/dokter/dr.maya.jpg";
import doctorImg3 from "../assets/img/dokter/dr.budi.jpg";
import doctorImg4 from "../assets/img/dokter/dr.andi.jpg";
import doctorImg5 from "../assets/img/dokter/dr.agus.jpg";
import doctorImg6 from "../assets/img/dokter/dr.sinta.jpg";

const DashContentComponent = () => {
    return (
        <div className="col" id="content-side">
            <div className="head-title">
                <div className="left">
                    <h1>Dashboard</h1>
                </div>
            </div>


            <ul className="box-info">
                <li>
                <i className="bx fa fa-notes-medical" />
                <span className="text">
                    <p>Today's Appointment</p>
                    <h3>60 <span className="span-patient">Patient</span></h3>
                </span>
                </li>
                <li>
                <i className="bx fa fa-notes-medical" />
                <span className="text">
                    <p>Appointment Remaining</p>
                    <h3>40 <span className="span-patient">Patient</span></h3>
                </span>
                </li>
                <li>
                <i className="bx fa fa-notes-medical" />
                <span className="text">
                    <p>Appointment Completed</p>
                    <h3>20 <span className="span-patient">Patient</span></h3>
                </span>
                </li>
            </ul>


        <div className="doc-appo-data">
            <div className="doc-appoint">
                <div className="head">
                    <h3>Doctor Appointment</h3>
                    <i className="bx bx-search" />
                    <i className="bx bx-filter" />
                </div>
                    <ul className="box-doc">
                        <li>
                        <img src={doctorImg1} alt="" />
                        
                        <span className="text1">
                            <h3 className="doc-name">Dr. Maya Putri, Sp.JP</h3>
                            <p>Heart Specialist</p>
                        </span>
                        <span className="text2">
                            <h3 className="num-patient">10</h3>
                            <span className="span-patient">Patient</span>
                        </span>
                        </li>
                        <li>
                        <img src={doctorImg2} alt="" />
                        <span className="text1">
                            <h3 className="doc-name">Dr. Maya Putri, Sp.JP</h3>
                            <p>Heart Specialist</p>
                        </span>
                        <span className="text2">
                            <h3 className="num-patient">10</h3>
                            <span className="span-patient">Patient</span>
                        </span>
                        </li>
                        <li>
                        <img src={doctorImg3} alt="" />
                        
                        <span className="text1">
                            <h3 className="doc-name">Dr. Maya Putri, Sp.JP</h3>
                            <p>Heart Specialist</p>
                        </span>
                        <span className="text2">
                            <h3 className="num-patient">10</h3>
                            <span className="span-patient">Patient</span>
                        </span>
                        </li>
                        <li>
                        <img src={doctorImg4} alt="" />
                        
                        <span className="text1">
                            <h3 className="doc-name">Dr. Maya Putri, Sp.JP</h3>
                            <p>Heart Specialist</p>
                        </span>
                        <span className="text2">
                            <h3 className="num-patient">10</h3>
                            <span className="span-patient">Patient</span>
                        </span>
                        </li>
                        <li>
                        <img src={doctorImg5} alt="" />
                        
                        <span className="text1">
                            <h3 className="doc-name">Dr. Maya Putri, Sp.JP</h3>
                            <p>Heart Specialist</p>
                        </span>
                        <span className="text2">
                            <h3 className="num-patient">10</h3>
                            <span className="span-patient">Patient</span>
                        </span>
                        </li>
                        <li>
                        <img src={doctorImg6} alt="" />
                        
                        <span className="text1">
                            <h3 className="doc-name">Dr. Maya Putri, Sp.JP</h3>
                            <p>Heart Specialist</p>
                        </span>
                        <span className="text2">
                            <h3 className="num-patient">10</h3>
                            <span className="span-patient">Patient</span>
                        </span>
                        </li>
                    </ul>
            </div> 
        </div>
</div>

    )
}
export default DashContentComponent;