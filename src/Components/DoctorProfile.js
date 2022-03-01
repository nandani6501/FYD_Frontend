// /* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function DoctorProfile() {
  const params = useParams();

  const [name, setName] = useState("");
  const [experience, setExperience] = useState("");
  const [degree, setDegree] = useState("");
  const [address, setAddress] = useState("");
  const [clinicName, setClinicName] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [timing, setTiming] = useState("");

  useEffect(() => {
    // console.log(params.id)
    getDoctorDetail();
  }, []);

  const getDoctorDetail = async () => {
    let result = await fetch(
      `http://localhost:5000/DoctorProfile/${params.id}`
    );
    result = await result.json();
    console.log(result);
    setName(result.Name);
    setClinicName(result.Clinic_name);
    setAddress(result.Address + " , " + result.Area + " , " + result.City);
    setDegree(result.Degree);
    setExperience(result.Experience);
    setContactNumber(result.Contact_number);
    setSpecialization(result.Specialization);
    setTiming(result.Timing);
  };

  return (
    <>
      <div
        className="card mb-3 mt-5 profiledr bg-light"
        style={{ maxWidth: "740px", margin: "0 auto" }}
      >
        <div className="row ">
          <div className="col-md-5 p-5">
            <img
              src="https://media.istockphoto.com/vectors/doctor-icon-vector-id519280527?b=1&k=20&m=519280527&s=612x612&w=0&h=iYkrWjR-AOdfTVJNbztOTpVaNcJvw6njvH-RkRcmz3E="
              className="img-fluid rounded-start"
              alt="..."
            />
            <h3 className="card-title  mt-5 drname">Dr. {name}</h3>
            <p className="card-text pr mt-5">
              <i className="fas fa-graduation-cap"> DEGREE</i>
            </p>
            <hr></hr>
            <p className="card-text">{degree}</p>
            <p className="card-text pr mt-5">
              <i class="fas fa-stethoscope"> SPECIALIZATION</i>
            </p>
            <hr></hr>
            <p className="card-text">{specialization}</p>
          </div>

          <div className="col-md-7 p-5">
            <div className="card-body">
              <p className="card-text pr">
                <i class="fas fa-map-marker-alt"> ADDRESS</i>
              </p>
              <hr></hr>
              <p className="card-text">{address}</p>
              <p className="card-text mt-5 pr ">
                <i class="fas fa-user-md"> EXPERIENCE</i>
              </p>
              <hr></hr>
              <p className="card-text">{experience} years</p>
              <p className="card-text mt-5 pr">
                <i class="fas fa-clinic-medical"> CLINIC NAME</i>
              </p>
              <hr></hr>
              <p className="card-text">{clinicName}</p>
              <p className="card-text mt-5 pr">
                <i class="fas fa-phone-alt"> CONTACT NUMBER</i>
              </p>
              <hr></hr>
              <p className="card-text">{contactNumber}</p>
              <p className="card-text mt-5 pr">
                <i class="far fa-clock"> TIMING</i>
              </p>
              <hr></hr>
              <p className="card-text">{timing}</p>

              <button type="submit" className="btn btn-primary mt-5 app">
                <Link
                  to={`/appointment/${name}`}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  Book Appointment
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DoctorProfile;
