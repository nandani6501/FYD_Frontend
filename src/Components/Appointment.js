import { useState } from "react";
import { Link, useParams } from "react-router-dom";

function Appointment() {
  const [patientName, setPatientName] = useState("");
  const [doctorName, setDoctorName] = useState("");
  const [number, setNumber] = useState("");
  const [identitynumber, setIdentityNumber] = useState("");
  const [appointmentDate, setAppointmentDate] = useState("");
  const [proof, setProof] = useState("");
  const [slot, setSlot] = useState("");
  const params = useParams();

  const collectData = async () => {
    if (
      patientName != null &&
      doctorName != null &&
      appointmentDate != null &&
      number != null &&
      proof != null &&
      identitynumber != null &&
      slot != null
    ) {
      console.warn(patientName, doctorName, number, appointmentDate);

      const result = await fetch("http://localhost:5000/appointment", {
        method: "post",
        body: JSON.stringify({
          patientName,
          doctorName,
          number,
          appointmentDate,
          proof,
          identitynumber,
          slot,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
    }
    alert(
      "Appointment booked successfully between " +
        slot +
        " on " +
        appointmentDate +
        " !!"
    );
  };

  

  return (
    <>
      <div className="Login">
        <form>
          <h3 align="center" className="mb-5 mt-3">
            Appointment Letter <i class="far fa-calendar-check"></i>{" "}
          </h3>
          <div className="form-group p-y-2 mt-3">
            <label>
              <i class="far fa-user-injured"></i> Patient Name{" "}
            </label>
            <input
              type="text"
              className="form-control mt-2"
              required
              placeholder="Enter Patient Name"
              value={patientName}
              onChange={(e) => setPatientName(e.target.value)}
            />
          </div>
          <div className="form-group p-y-2 mt-3">
            <label>
              <i class="far fa-user-md"></i> Doctor's Name
            </label>
            <input
              type="text"
              className="form-control mt-2"
              value={"Dr. " + params.name}
              // onChange={(e) => setDoctorName(e.target.value)}
              placeholder="Enter Doctor Name"
              required
            />
          </div>

          <div className="form-group p-y-2 mt-3">
            <label>
              <i class="fad fa-phone"></i> Your Contact Number
            </label>
            <input
              type="text"
              className="form-control mt-2"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              placeholder="Enter contact number"
              required
            />
          </div>
          <div className="form-group p-y-2 mt-3">
            <label>
              <i class="fal fa-id-card"></i> Identity Proof
            </label>
            <select
              className="form-select mt-2"
              value={proof}
              onChange={(e) => setProof(e.target.value)}
              required
            >
              <option selected disabled value="">
                Choose...
              </option>
              <option>Aadhar Card</option>
              <option>Voter Card</option>
              <option>Pan Card</option>
            </select>
          </div>
          <div className="form-group p-y-2 mt-3">
            <label>
              <i class="far fa-pen"></i> Identity proof Number
            </label>
            <input
              type="text"
              className="form-control mt-2"
              value={identitynumber}
              onChange={(e) => setIdentityNumber(e.target.value)}
              placeholder="Enter identity proof number"
              required
            />
          </div>
          <div className="form-group p-y-2 mt-3">
            <label>
              {" "}
              <i class="far fa-users"></i> Select Slot
            </label>
            <select
              className="form-select mt-2"
              value={slot}
              onChange={(e) => setSlot(e.target.value)}
              required
            >
              <option selected disabled value="">
                Choose...
              </option>
              <option>10 A.M - 11 A.M</option>
              <option>11 A.M - 12 A.M</option>
              <option>12 P.M - 1 P.M</option>
              <option>3 P.M - 4 P.M</option>
              <option>4 P.M - 5 P.M</option>
              <option>5 P.M - 6 P.M</option>
            </select>
          </div>

          <div className="form-group p-y-2 mt-3">
            <label>
              <i class="far fa-calendar-alt"></i> Appointment Date
            </label>
            <input
              type="date"
              className="form-control mt-2"
              value={appointmentDate}
              onChange={(e) => setAppointmentDate(e.target.value)}
              required
            />
          </div>

          <button
            onClick={collectData}
            type="submit"
            className="btn btn-primary mt-4 bg-light"
            style={{ color: "black" }}
          >
            Book Appointment
          </button>
        </form>
      </div>
    </>
  );
}

export default Appointment;
