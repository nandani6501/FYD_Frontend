import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";



function DisplayDoctor() {
  const [details, setDetails] = useState([]);
  const [area, setArea] = useState(undefined);
  const [specialization, setSpecialization] = useState(undefined);


  useEffect(() => {
    getDetails();
  }, []);

  const getDetails = async () => {
    let result = await fetch("http://localhost:5000/search");
    result = await result.json();
    setDetails(result);
  };


  const filterProducts = (e) => {
    e.preventDefault();
    const filteredProductsItem = details.filter((currentProduct) => {

      if (area !== undefined && specialization !== undefined) {
        return currentProduct.Area === area && currentProduct.Specialization === specialization;
      } else if (area !== undefined) {
        return currentProduct.Area === area;
      } else if (specialization !== undefined) {
        return currentProduct.Specialization === specialization;
      } else {
        return currentProduct;
      }

    });

    setDetails(filteredProductsItem);


  }

  const searchHandle = async (e) => {

    let key = area;
    console.warn(key)
    let result = await fetch(`http://localhost:5000/SearchDrArea/${key}`);
    result = await result.json();
    setDetails(result)

  }



  return (
    <>
      <div className="dd">
        <div className="row p-2 my-5 " >
          <form class="row gy-2 gx-3 justify-content-center ">
            <div class="col-auto ">
              <input type="text" class="form-control searcharea" value={area} onChange={(e) => setArea(e.target.value)} placeholder="Search Area" />
            </div>

            <div className="col-auto ">
              <select value={specialization} onChange={(e) => setSpecialization(e.target.value)} class="form-select ">

                <option value={undefined} selected disabled>Select Specialization</option>
                <option value="Surgeon">Surgeon</option>
                <option value="Eye Specialist">Ophthalmologist</option>
                <option value="Dentist">Dentist</option>
                <option value="Cardiologist">Cardiologist</option>
                <option value="Homeopethic">Homeopethic</option>

              </select>

            </div>

            <div class="col-auto">
              <button className="btn" style={{ backgroundColor: "#87CEFA" }} onClick={searchHandle} onClick={filterProducts}>  <i class="far fa-search"></i> </button>
            </div>
          </form>
        </div>


        <h2 className="doctorlist"> Doctor's List</h2>
        <div style={{ width: "90%", margin: " auto" }} >
          <div className="row m-3"  >
            {details.map((item) => (
              <>
                <div key={item._id} class=" col-md-4 my-2">
                  <div class="card doctorcard " style={{ borderRadius: "2%", marginLeft: "10px", marginTop: "10px" }} >
                    <div class="card-body bg-light" >
                      <h5 class="card-title"> {item.Name}</h5>
                      <p class="card-text">
                        Specialization : {item.Specialization}<br></br>
                        Area : {item.Area}

                      </p>


                      <Link to={`/DoctorProfile/${item._id}`} style={{ textDecoration: "none" }}><button className="btn viewprofile">View Profile</button></Link>

                    </div>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );

}

export default DisplayDoctor;
